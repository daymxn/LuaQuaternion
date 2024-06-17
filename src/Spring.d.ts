/*
    Source: https://github.com/probablytukars/LuaQuaternion
    Based on: https://github.com/Quenty/NevermoreEngine/tree/main/src/spring
    [MIT LICENSE]
*/

type nlerpable = number | Vector2 | Vector3 | UDim | UDim2

interface Spring {
    Reset(this: Spring, target: nlerpable?);
    Impulse(this: Spring, velocity: nlerpable);
    TimeSkip(this: Spring, delta: number);
    
    Position: nlerpable;
    p: nlerpable;
    Velocity: nlerpable;
    v: nlerpable;
    Target: nlerpable;
    t: nlerpable;
    Damping: number;
    d: number;
    Speed: number;
    s: number;
    Clock(): number;
}

interface SpringConstructor {
    new(initial: nlerpable, damping: number, speed: number, clock: () => number): Spring
}

declare const Spring: SpringConstructor;
export = Spring
