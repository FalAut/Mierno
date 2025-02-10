const $KeyMapping = Java.loadClass('net.minecraft.client.KeyMapping');
const $GLFWkey = Java.loadClass('org.lwjgl.glfw.GLFW');

const Zoom = {
    MIN_FOV: 5, // 最小视野值，过小或过大的值可能会导致问题
    SENSITIVITY: 5, // 滚轮灵敏度
    SMOOTHING: 0.1, // 过渡的平滑因子
    target: 50, // 目标缩放值，默认值为50
    current: 0, // 当前缩放值
    active: false, // 缩放的激活状态
};

// 当玩家按下或按住缩放热键时激活缩放
ForgeEvents.onEvent('net.minecraftforge.client.event.InputEvent$Key', (event) => {
    // 当玩家在GUI界面或使用望远镜时不激活缩放
    if (Client.screen || Client.player.isScoping()) return;

    if (event.getKey() == global.toggleZoom.getKey().getValue()) {
        // 0=释放，1=按下，2=按住
        Zoom.active = event.getAction() != 0;
    }
});

// 缩放滚轮处理
ForgeEvents.onEvent('net.minecraftforge.client.event.InputEvent$MouseScrollingEvent', (event) => {
    if (!Zoom.active) return;

    const baseFov = Client.options.fov().get();
    const newTarget = Zoom.target + event.getScrollDelta() * Zoom.SENSITIVITY;
    // 限制缩放值范围
    Zoom.target = JavaMath.clamp(newTarget, 0, baseFov - Zoom.MIN_FOV);

    event.setCanceled(true);
});

// 设置缩放
// 这里也许应该设置一个缓存
ForgeEvents.onEvent('net.minecraftforge.client.event.ViewportEvent$ComputeFov', (event) => {
    // 平滑过渡
    if (Zoom.active) {
        Zoom.current += (Zoom.target - Zoom.current) * Zoom.SMOOTHING;
    } else {
        Zoom.current += (0 - Zoom.current) * Zoom.SMOOTHING;
    }

    event.setFOV(event.getFOV() - Zoom.current);
});
