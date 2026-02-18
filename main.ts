namespace SpriteKind {
    export const Hitbox = SpriteKind.create()
    export const Hitboxreturn = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hitboxreturn, function (sprite, otherSprite) {
    MapID += -1
    if (MapID == 0) {
        grid.place(mySprite, tiles.getTileLocation(1, 13))
    } else if (MapID == 1) {
        grid.place(mySprite, tiles.getTileLocation(1, 8))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . . . . . b b b b b b . . 
        . d d d d . . . . b b b b b b . 
        e e e e e e e e e b b b b b b b 
        . d d d d . . . . b b b b b b . 
        . . . . . . . . b b b b b b . . 
        . . . . . . . . b b b b . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, mySprite.vx * 3, mySprite.vy * 3)
    projectile.setPosition(mySprite.x, mySprite.y)
    projectile.startEffect(effects.spray, 5000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MapID += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hitbox, function (sprite, otherSprite) {
    MapID += 1
    if (MapID == 1) {
        grid.place(mySprite, tiles.getTileLocation(14, 13))
    } else if (MapID == 2) {
        grid.place(mySprite, tiles.getTileLocation(14, 13))
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
let MapID = 0
MapID = 0
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .....7977777777.....
    .....7777777777.....
    ......66666666......
    ......77777777......
    .....7797777777.....
    .....7977777777.....
    .....7977777777.....
    .....7777777777.....
    .....7777777777.....
    .....77f7777f76.....
    .....7777ff7776.....
    ......76666666......
    .......f....f.......
    .......f....f.......
    `, SpriteKind.Player)
mySprite.setPosition(125, 105)
let HPOFTHEPLERE = statusbars.create(40, 4, StatusBarKind.Health)
info.setLife(3)
HPOFTHEPLERE.max = 100
HPOFTHEPLERE.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
scene.cameraFollowSprite(mySprite)
HPOFTHEPLERE.attachToSprite(mySprite)
HPOFTHEPLERE.setLabel("HP")
HPOFTHEPLERE.setColor(7, 15, 2)
HPOFTHEPLERE.value = 100
controller.moveSprite(mySprite, 50, 50)
let teleportatonextlevelorta = sprites.create(assets.image`Debug`, SpriteKind.Hitbox)
pause(500)
grid.snap(teleportatonextlevelorta, false)
grid.place(teleportatonextlevelorta, tiles.getTileLocation(0, 12))
scaling.scaleToPixels(teleportatonextlevelorta, 90, ScaleDirection.Vertically, ScaleAnchor.Top)
tiles.setCurrentTilemap(tilemap`level`)
let tptoprev = sprites.create(assets.image`Debug`, SpriteKind.Hitboxreturn)
pause(500)
grid.snap(tptoprev, false)
grid.place(tptoprev, tiles.getTileLocation(15, 12))
scaling.scaleToPixels(tptoprev, 90, ScaleDirection.Vertically, ScaleAnchor.Top)
forever(function () {
    if (MapID == 0) {
        tiles.setCurrentTilemap(tilemap`level`)
    } else if (MapID == 1) {
        tiles.setCurrentTilemap(tilemap`Grasslands2`)
    } else if (MapID == 2) {
        tiles.setCurrentTilemap(tilemap`Grasslands0`)
    } else {
        MapID += -1
    }
})
// indenefy pos of going
forever(function () {
    if (MapID == 0) {
        grid.place(teleportatonextlevelorta, tiles.getTileLocation(0, 13))
    } else if (MapID == 1) {
        grid.place(teleportatonextlevelorta, tiles.getTileLocation(0, 9))
    } else if (MapID == 2) {
        grid.place(teleportatonextlevelorta, tiles.getTileLocation(0, 0))
    }
})
// same but with tptoprev
forever(function () {
    if (MapID == 0) {
        grid.place(tptoprev, tiles.getTileLocation(15, 12))
    } else if (MapID == 1) {
        grid.place(tptoprev, tiles.getTileLocation(15, 12))
    } else if (MapID == 2) {
        grid.place(tptoprev, tiles.getTileLocation(15, 12))
    }
})
forever(function () {
    music.play(music.stringPlayable("D C D C D C D C ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D E D C D E C D ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E E F E F E F E ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E D C C D E C C ", 300), music.PlaybackMode.UntilDone)
})
forever(function () {
    if (HPOFTHEPLERE.value == 0) {
        info.changeLifeBy(-1)
        HPOFTHEPLERE.value = 100
    }
})
// not rly same
forever(function () {
	
})
