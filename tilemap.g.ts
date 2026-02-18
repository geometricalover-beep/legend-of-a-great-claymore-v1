// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`100010000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b01020202010202020b0b0b0b0b0b0b01020b0b02020b0b02020b0b0b0b0b0b02020b030404050b02010b0b0b0b0b0b010202080707060202020b0b0b0b0b0b020102080707060201020b0b0b0b0b0b02020b0907070a0b02020b0b0b0b0b0b02020b0b08060b0b02020b0b0b0b0b0b010202020806020202020b0b0b0b0b0b020202020806020201010b0b0b0c0c02020102010202020102020b0b0b0c0c01020202020201010102020b0b0b0c0c02010101010101020201020b0b0b0c0c020201010201020202020b0b0b0b`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 . . . . . . . . 2 2 . . 
. . 2 . . 2 2 . . 2 2 . . 2 . . 
. . 2 . . 2 . . . . 2 . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
2 2 2 . . . . . . . . . . 2 2 . 
2 2 2 . . 2 . . . . 2 . . 2 2 . 
2 2 2 . . 2 2 . . 2 2 . . 2 2 . 
2 2 2 . . . . . . . . . . 2 2 . 
2 2 2 . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . 2 2 . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath9,myTiles.tile2,sprites.castle.tileGrass2], TileScale.Sixteen);
            case "dungeon1":
            case "dungeon3":return tiles.createTilemap(hex`24002c000000000000000000000000000000000000000000000000000000000000000000000000000001040d170404040d0408000001040d040404040d0408000001040d040404040d040800000209090909090909090700000209090909090909090700000209090909090909090700000e09090909090909091504041409090909090909090f00000209090909090909090f00000209090909090909090909090909090909090909090700000209090909090909090700000209090909090909090909090909090909090909090700000209090909090909090700000209090909090909090909090909090909090909090700000209090909090909090700000e09090909090909091311051209090909090909090f00000209090909090909090f0000020909090909090909070000020909090909090909070000020a0c09090909090b07000003111005050505100506000003111012090913100506000003111012090913100506000000000000000000000000000000000002090907000000000000000002090907000000000000000000000000000000000000000002090907000000000000000002090907000000000001040d040404040d0408000001040d140909150d0408000001040d140909150d04080000020909090909090909070000020909090909090909070000020b090909090909091600000e09090909090909090f00000e09090909090909091504041409090909090909090f00000209090909090909090700000209090909090909090909090909090909090909090700000209090909090909090700000209090909090909090909090909090909090909090700000209090909090909090700000209090909090909090909090909090909090909090700000e09090909090909090f00000e09090909090909091305111209090909090909090f0000020a0c09090909090b07000002090909090909090907000002090909090909090907000003051012090913100506000003111005050505100506000003111012090913100506000000000002090907000000000000000000000000000000000000000002090907000000000000000002090907000000000000000000000000000000000000000002090907000000000001040d140909150d0408000001040d040404040d0408000001040d140909150d04080000020909090909090909160000020b0c090909090909070000020c090909090909090700000e09090909090909091504041409090909090909091504041409090909090909090f00000209090909090909090909090909090909090909090909090909090909090909090700000209090909090909090909090909090909090909090909090909090909090909090700000209090909090909090909090909090909090909090909090909090909090909091600000e09090909090909091305051209090909090909091305111209090909090909090f0000020909090909090b0a07000002090909090909090907000002090909090909090907000003111005110505100506000003051012090913100506000003051005050505100506000000000000000000000000000000000002090907000000000000000000000000000000000000000000000000000000000000000002090916000000000000000000000000000000000000000000000000000000000001040d140909150d170800000000000000000000000000000000000000000000000000000209090909090909090700000000000000000000000000000000000000000000000000000e09090909090909090f00000000000000000000000000000000000000000000000000000209090909090909090700000000000000000000000000000000000000000000000000000209090909090909090700000000000000000000000000000000000000000000000000000209090909090909090700000000000000000000000000000000000000000000000000000e09090909090909090f00000000000000000000000000000000000000000000000000000209090909090909090700000000000000000000000000000000000000000000000000000311101209091310050600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
....................................
.2222222222..2222222222..2222222222.
.2........2..2........2..2........2.
.2........2222........2..2........2.
.2....................2..2........2.
.2....................2..2........2.
.2....................2..2........2.
.2........2222........2..2........2.
.2........2..2........2..2........2.
.2222222222..2222..2222..2222..2222.
................2..2........2..2....
................2..2........2..2....
.2222222222..2222..2222..2222..2222.
.2........2..2........2..2........2.
.2........2..2........2222........2.
.2........2..2....................2.
.2........2..2....................2.
.2........2..2....................2.
.2........2..2........2222........2.
.2........2..2........2..2........2.
.2222..2222..2222222222..2222..2222.
....2..2....................2..2....
....2..2....................2..2....
.2222..2222..2222222222..2222..2222.
.2........2..2........2..2........2.
.2........2222........2222........2.
.2................................2.
.2................................2.
.2................................2.
.2........2222........2222........2.
.2........2..2........2..2........2.
.2222222222..2222..2222..2222222222.
................2..2................
................2..2................
.............2222..2222.............
.............2........2.............
.............2........2.............
.............2........2.............
.............2........2.............
.............2........2.............
.............2........2.............
.............2........2.............
.............2222..2222.............
....................................
`, [gallerytilemaps.baseTransparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.floorDark0,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1], TileScale.Sixteen);
            case "level1Dungeon":
            case "level2":return tiles.createTilemap(hex`10000a000510100a1010101010011010100a100807120e0d11120d111101121111121104070d0e0e0e1111120e11110d11110e04070f120f0e0d11110e120e0e0e0d0e04071211120f0f12110e0e0f0d0f0f0f04070e11120e0f0e0e0f0f0f0f0d0f0d04070e0e0d0e0d0c0f0f0f0c0d0c0c0f04070f0f0d0f0f090c0f0f13110f0d0d04070d0f0c0f0c090c0c111111110f0f040602020202020b020202020202020203`, img`
2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.stairSouth,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.stairNorth,sprites.dungeon.purpleSwitchUp,sprites.dungeon.doorLockedSouth,sprites.dungeon.floorDark5,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.floorDark0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.floorDark2,sprites.dungeon.floorDarkDiamond,sprites.builtin.forestTiles10], TileScale.Sixteen);
            case "Grasslands0":
            case "Grasslands1":return tiles.createTilemap(hex`10001000010101010101010101010101010101010101010c0c0c0c0c020c0c010101010101010c0202020c0c0c0c0c0c0c02010101010c0c020c0c0c0c0c020c020c010101010c0c0c0c0c020c0101010c020c0101010c0202020c0c0c0c0c0102020c0101010c0603030304020c0c01020c020101010c07050f050802020c010c02020101010c0705050508020c0c010c0c0201010c0c090b0b0b0a0c0202010c0c0c01010c0c0202020202020202010c0c0c01010c0c0c020c0c0c020c020101010101010c0c020c02020c0c0c0c0c020d0d0d010c0c0c02020c0c0c020c0c020d0d0d10101013101010101102020c020d0d0d0e0e0e0e0e0e0e0e12020202020d0d0d`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . 2 2 2 . . . 2 
2 2 . . . . . . . . . 2 . . . 2 
2 2 . . . . . . . . . 2 . . . 2 
2 2 . . . . . . . . . 2 . . . 2 
2 2 . . . . . . . . . 2 . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 2 . 2 2 2 2 2 . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,sprites.castle.tileGrass3,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.dungeon.darkGroundCenter,myTiles.tile3,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.doorOpenSouth], TileScale.Sixteen);
            case "Grasslands2":
            case "level3":return tiles.createTilemap(hex`1000100002010202020202020c0c020202020c02020202020102010202010c0201020c0202010102020202020c0c020102020c0c02020c0c020102020c0c0202020102020d02010c0c0c0c020c02020201020c020d02020202020c0c0c010202020202010d0102060303030402020102020102020d0202070513050802020c0c0c0202010d020c0705050508020c0c02020102020d0201090b0b0b0a01020202010c0c020d0c0202020202020202020c0c0c0c0c0d0c0201020c0c0c020c0202020c0c0c0d020c020c02020c0c0c0c0c020d0d0d01020c0c02020c0c0c020c0c020d0d0d0f0f0f0e0f0f0f0f1002020c020d0d0d121212121212121211020202020d0d0d`, img`
. 2 . . . . . . . . . . . . . . 
. . . . 2 . 2 . . 2 . . 2 . . . 
. 2 2 . . . . . . . . 2 . . . . 
. . . . . 2 . . . . . . . 2 . . 
. . 2 . . . . . . . . . 2 . . . 
. . . . . . . . . 2 . . . . . 2 
. 2 . . . . . . . . 2 . . 2 . . 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . 2 . . 
. . 2 . . . . . 2 . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,sprites.castle.tileGrass3,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.dungeon.doorLockedSouth,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.darkGroundCenter,myTiles.tile3], TileScale.Sixteen);
            case "swamp":
            case "gallerytilemaps.swamp":return tiles.createTilemap(hex`0a000800000b030c000000000000050202020400000000000101080101000b030c000601010107090a0a0a0d00000000000a0a0a0a0a00000000000e0a0a0a0f0000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [gallerytilemaps.baseTransparency16,sprites.swamp.swampTile9,sprites.swamp.swampTile7,sprites.swamp.swampTile1,sprites.swamp.swampTile8,sprites.swamp.swampTile6,sprites.swamp.swampTile12,sprites.swamp.swampTile14,sprites.swamp.swampTile13,sprites.swamp.swampTile10,sprites.swamp.swampTile16,sprites.swamp.swampTile0,sprites.swamp.swampTile2,sprites.swamp.swampTile11,sprites.swamp.swampTile18,sprites.swamp.swampTile19], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "flowers":
            case "tile1":return tile1;
            case "grass":
            case "tile2":return tile2;
            case "myTile":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
