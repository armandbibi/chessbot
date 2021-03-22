import * as React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Alert, Dimensions, ShadowPropTypesIOS } from 'react-native';
import Draggable from 'react-native-draggable';
import Svg, { G, Path } from "react-native-svg"
import { useState } from 'react';


const None = 0;
const King = 1;
const Pawn = 2;
const Knigth = 3;
const Bishop = 4;
const Rook = 5;
const Queen = 6;

export const white = 8;
export const black = 16;

export const pieces = {
    None,
    King,
    Pawn,
    Knigth,
    Bishop,
    Rook,
    Queen,
    white,
    black
}


export function ShapePiece(props) {


    const screenWidth = Dimensions.get('screen').width;


    let color = props.piece & white ? 'white' : 'black'
   
    const [positionX, setPositionX] = useState(props.placement.tile * screenWidth / 8 );
    const [positionY, setPositionY] = useState(props.placement.rank * screenWidth / 8);
   // console.log(props);




    function roundUp(event, gestureState) {
       
        props.redraw(props.placement.tile, props.placement.rank, 5, 5)
    }

    return (
    <Draggable
       debug={true}
        x={positionX}
        y={positionY}
        renderSize={185}
        onDragRelease={(event, gestureState) => roundUp(event, gestureState)}
    >
        
        <Svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="45.000000pt"
        height="45.000000pt"
        viewBox="0 0 185.000000 185.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <G
          transform="translate(0.000000,185.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
            <Shape piece={props.piece}></Shape>
        </G>
      </Svg>
      </Draggable>
    )
}


const RookShape = () => <Path d="M287 1702 c-14 -15 -17 -42 -17 -154 l0 -136 75 -70 75 -70 0 -362 0 -362 -60 -66 c-60 -67 -60 -67 -60 -130 0 -57 -2 -63 -24 -71 -30 -12 -36 -29 -36 -100 0 -98 -51 -91 631 -91 450 0 598 3 607 12 17 17 15 148 -2 171 -7 9 -21 17 -30 17 -13 0 -16 11 -16 66 0 66 0 66 -55 127 l-55 62 0 367 0 366 75 70 75 70 0 131 c0 173 2 171 -155 171 l-115 0 0 -68 0 -68 -50 -16 c-46 -15 -55 -15 -95 -1 l-45 15 0 69 0 69 -140 0 -140 0 0 -68 0 -68 -45 -16 c-40 -15 -50 -16 -95 -2 l-50 15 0 69 0 70 -118 0 c-103 0 -121 -3 -135 -18z m1138 -282 c-4 -6 -198 -10 -550 -10 -352 0 -546 4 -550 10 -4 7 182 10 550 10 368 0 554 -3 550 -10z m-155 -140 c0 -7 -141 -10 -404 -10 -259 0 -407 4 -411 10 -4 7 133 10 404 10 267 0 411 -3 411 -10z m0 -740 c0 -7 -143 -10 -410 -10 -267 0 -410 3 -410 10 0 7 143 10 410 10 267 0 410 -3 410 -10z m105 -130 c-9 -14 -1025 -14 -1025 0 0 7 179 10 516 10 341 0 513 -3 509 -10z m5 -140 c0 -7 -178 -10 -515 -10 -337 0 -515 3 -515 10 0 7 178 10 515 10 337 0 515 -3 515 -10z"></Path>

const KnigthShape = () =>  <Path d="M1012 1658 c-6 -6 -19 -45 -29 -86 -16 -68 -20 -76 -57 -99 -39 -25 -40 -25 -95 -10 l-55 15 -59 -46 c-33 -26 -66 -52 -73 -58 -8 -6 -14 -19 -14 -28 0 -9 -8 -16 -19 -16 -23 0 -121 -107 -121 -132 0 -10 -7 -18 -15 -18 -17 0 -115 -127 -115 -150 0 -9 -9 -23 -20 -32 -27 -23 -91 -154 -84 -171 3 -8 -1 -17 -9 -20 -21 -8 -79 -163 -75 -199 1 -16 -3 -32 -10 -37 -7 -4 -20 -48 -29 -97 -10 -49 -21 -92 -25 -95 -5 -3 1 -14 12 -24 20 -18 20 -18 0 -32 -18 -13 -20 -25 -20 -119 l0 -104 705 0 c388 0 705 2 705 5 0 16 -54 109 -81 140 -18 20 -78 72 -134 115 -124 96 -200 177 -233 248 -24 53 -51 186 -40 198 4 3 16 0 29 -6 13 -7 46 -10 82 -8 59 4 61 4 98 -33 21 -21 61 -53 90 -73 28 -19 74 -62 101 -95 50 -63 79 -78 126 -67 15 4 44 11 64 15 104 23 163 112 138 210 -6 25 -49 111 -94 191 -119 208 -136 244 -136 290 0 56 -29 108 -108 191 -67 71 -67 72 -82 158 -13 76 -18 86 -37 89 -17 3 -32 -11 -68 -60 -26 -35 -50 -64 -55 -66 -4 -2 -33 27 -65 63 -58 66 -72 74 -93 53z m-172 -277 c0 -6 -17 -23 -37 -38 -20 -15 -73 -69 -118 -119 -254 -286 -392 -608 -421 -986 -3 -49 -11 -88 -17 -88 -6 0 -8 28 -4 80 5 79 5 80 -18 80 -32 0 -56 10 -49 21 3 5 21 7 40 3 25 -5 34 -3 34 7 0 8 9 56 19 107 l18 92 -30 8 c-41 10 -50 36 -10 26 15 -4 32 -7 36 -8 7 -1 76 174 77 196 0 3 -14 9 -30 13 -17 4 -30 13 -30 21 0 10 6 11 26 4 14 -6 31 -10 37 -10 7 0 31 38 54 84 l42 85 -35 11 c-21 7 -32 16 -27 21 5 5 22 4 41 -3 17 -7 33 -10 35 -8 21 28 97 143 95 145 -2 1 -13 8 -26 14 -12 7 -20 16 -17 21 4 6 17 4 34 -4 28 -15 28 -15 84 53 l56 68 -25 13 c-13 7 -24 17 -24 22 0 11 11 10 40 -6 23 -13 27 -11 79 35 55 49 71 58 71 40z m432 -61 c105 -30 122 -178 18 -155 -41 9 -80 58 -80 100 0 19 -5 37 -10 40 -14 9 -2 25 18 25 9 0 34 -5 54 -10z"></Path>
const BishopShape = () => <Path d="M835 1752 c-11 -2 -30 -14 -43 -25 -18 -17 -23 -30 -21 -65 3 -38 0 -45 -26 -61 -111 -67 -238 -279 -292 -484 -23 -89 -20 -242 6 -342 25 -93 85 -218 138 -290 l38 -50 -8 -70 c-13 -116 -17 -135 -30 -135 -7 0 -51 13 -97 30 -149 52 -239 36 -377 -66 -62 -46 -68 -60 -17 -39 46 19 88 19 150 0 27 -8 64 -15 81 -15 18 0 80 -16 137 -35 137 -46 231 -48 362 -8 127 38 148 38 239 7 59 -20 107 -28 180 -32 94 -4 106 -2 209 32 60 20 122 36 138 36 16 0 59 8 94 17 52 14 72 15 106 6 24 -6 45 -9 48 -6 10 10 -66 65 -135 99 -94 46 -150 46 -289 -1 -58 -19 -111 -35 -119 -35 -10 0 -19 30 -31 111 l-17 111 43 56 c65 86 133 228 153 316 25 111 17 254 -19 361 -58 169 -167 348 -247 404 -35 25 -37 28 -32 72 9 77 -47 119 -125 94 -28 -8 -53 -62 -45 -94 6 -24 -9 -41 -38 -41 -14 0 -16 8 -11 45 4 38 1 50 -17 69 -24 25 -52 34 -86 28z m294 -176 c38 -20 129 -121 169 -189 155 -260 177 -500 65 -720 -28 -57 -37 -58 -21 -1 7 22 12 94 12 164 -1 101 -6 144 -27 225 -49 187 -163 374 -289 475 -37 29 -52 47 -45 52 20 13 107 9 136 -6z m-197 -348 c-7 -7 -12 -43 -12 -95 l0 -83 84 0 c63 0 87 4 96 15 12 14 16 13 37 -6 28 -28 29 -41 2 -65 -16 -15 -24 -16 -39 -6 -11 7 -55 12 -100 12 l-80 0 0 -93 c0 -60 4 -97 12 -105 10 -10 6 -18 -15 -39 l-27 -28 -27 28 c-21 21 -25 29 -15 39 8 8 12 45 12 105 l0 93 -80 0 c-45 0 -89 -5 -100 -12 -15 -10 -23 -9 -39 6 -27 24 -26 37 2 65 21 19 25 20 37 6 9 -11 33 -15 96 -15 l84 0 0 84 c0 50 -4 88 -11 92 -7 4 0 17 17 35 l28 29 25 -25 c20 -19 23 -27 13 -37z m114 -958 c45 -6 105 -19 135 -29 l54 -18 -70 -23 c-130 -42 -354 -37 -470 11 l-30 12 60 19 c54 17 151 34 215 37 14 0 62 -4 106 -9z"></Path>
const KingShape = () =>

    <G>
    <Path d="M730 1412 c0 -175 3 -222 15 -238 16 -24 11 -34 -17 -34 -29 0 -20 -12 42 -58 50 -36 128 -125 159 -181 5 -9 11 -14 13 -11 3 3 26 36 52 73 27 38 77 91 113 120 l66 51 -32 8 c-30 8 -31 10 -16 31 12 18 15 60 15 239 l0 218 -205 0 -205 0 0 -218z m375 33 l0 -150 -168 0 -168 0 0 148 c0 81 1 149 1 152 0 3 75 4 168 3 l167 -3 0 -150z m-85 -190 c80 -42 80 -138 0 -180 -36 -19 -122 -19 -158 -1 -62 32 -86 100 -51 142 43 52 146 72 209 39z" />
    <Path d="M854 1528 c33 -29 65 -57 73 -61 9 -6 34 10 78 49 36 32 65 59 65 61 0 2 -62 3 -137 3 l-137 0 58 -52z" />
    <Path d="M780 1446 l0 -128 38 30 c20 17 52 45 69 64 l33 34 -43 40 c-23 22 -54 50 -69 63 l-28 24 0 -127z" />
    <Path d="M1016 1507 l-68 -63 71 -63 71 -63 0 126 c0 69 -1 126 -2 126 -2 -1 -34 -29 -72 -63z" />
    <Path d="M867 1373 c-34 -31 -64 -58 -66 -60 -2 -1 58 -3 135 -3 l139 0 -65 60 c-36 32 -68 59 -73 60 -4 0 -35 -25 -70 -57z" />
    <Path d="M870 1243 c-99 -52 -64 -160 57 -170 84 -7 155 48 140 110 -16 60 -129 95 -197 60z" />
    <Path d="M381 1179 c-90 -18 -166 -83 -196 -170 -20 -55 -19 -172 1 -240 25 -85 71 -155 165 -255 49 -51 91 -104 95 -119 7 -28 1 -109 -10 -136 -6 -12 10 -22 73 -47 134 -54 232 -73 386 -79 102 -4 164 -1 230 11 95 16 224 56 287 87 34 17 37 21 28 45 -6 14 -10 50 -10 80 l0 55 101 105 c77 81 109 122 135 177 166 351 -101 611 -451 438 -95 -47 -175 -117 -230 -200 -22 -33 -42 -60 -45 -61 -3 0 -18 23 -35 51 -71 121 -239 236 -375 258 -74 12 -88 12 -149 0z m850 -565 c112 -18 247 -53 255 -66 12 -19 -5 -19 -72 1 -155 46 -238 56 -474 56 -236 0 -319 -10 -474 -56 -67 -20 -84 -20 -72 -1 7 11 132 46 226 62 178 32 430 34 611 4z m-116 -169 c87 -14 201 -43 260 -65 18 -7 25 -14 19 -20 -7 -7 -31 -3 -70 10 -240 83 -501 84 -756 4 -75 -24 -104 -25 -82 -4 14 13 178 59 269 74 108 19 251 19 360 1z m50 -90 c77 -16 222 -61 245 -75 8 -5 11 -12 8 -16 -4 -4 -49 7 -100 24 -134 44 -243 62 -378 62 -139 0 -248 -19 -378 -65 -53 -19 -98 -33 -100 -30 -25 24 202 98 368 119 62 8 263 -4 335 -19z" />
    </G>

const QueenShape = () => <Path d="M873 1665 c-39 -17 -53 -42 -53 -93 0 -32 6 -45 28 -64 l28 -23 -44 -275 c-25 -151 -46 -277 -48 -279 -9 -10 -27 25 -119 233 l-96 220 17 37 c30 69 -5 129 -76 129 -54 0 -90 -34 -90 -85 0 -38 35 -85 65 -85 9 0 15 -9 15 -22 0 -13 9 -117 20 -233 22 -236 23 -255 12 -255 -4 0 -76 83 -160 184 l-152 185 6 45 c6 41 4 48 -24 75 -41 41 -83 42 -123 2 -51 -51 -27 -130 44 -149 31 -8 34 -15 160 -338 139 -359 153 -411 141 -552 l-6 -82 43 -19 c153 -68 395 -104 546 -82 111 15 309 65 373 93 47 21 48 22 42 57 -4 20 -7 90 -7 156 l1 120 129 322 c129 321 129 321 162 328 41 7 63 38 63 88 0 79 -91 117 -146 62 -22 -22 -25 -33 -22 -76 l3 -51 -150 -184 c-82 -101 -156 -183 -163 -184 -10 0 -12 11 -8 43 3 23 13 119 21 212 21 232 24 255 39 255 7 0 22 10 34 23 31 33 30 96 -1 125 -33 31 -96 30 -125 -1 -26 -28 -30 -92 -7 -117 14 -15 6 -39 -85 -245 -102 -234 -106 -242 -115 -233 -3 3 -25 127 -50 276 l-44 271 29 30 c21 20 30 39 30 61 0 42 -25 87 -52 95 -48 14 -54 14 -85 0z m234 -1021 c118 -17 246 -54 243 -69 -1 -5 -7 -8 -14 -7 -111 33 -210 54 -295 63 -166 18 -377 -3 -517 -51 -56 -20 -72 -20 -60 -2 8 13 151 53 241 68 113 17 279 17 402 -2z m42 -209 c104 -20 221 -56 221 -68 0 -11 -11 -9 -145 28 -82 22 -128 28 -255 32 -169 6 -265 -6 -418 -50 -45 -13 -85 -20 -88 -16 -7 12 31 26 152 55 190 46 360 52 533 19z m-14 -70 c109 -19 245 -64 245 -80 0 -9 -26 -4 -84 16 -227 78 -515 76 -755 -5 -72 -24 -96 -26 -75 -7 17 17 161 61 246 75 113 19 316 19 423 1z" />
const PawnShape = () => <Path d="M730 1721 c-51 -16 -108 -51 -138 -86 -51 -58 -65 -94 -70 -181 -5 -94 12 -146 71 -211 l36 -39 -70 -12 c-92 -16 -129 -35 -129 -67 0 -33 37 -51 146 -70 48 -8 92 -21 97 -28 14 -20 -1 -323 -22 -422 -29 -141 -40 -160 -97 -174 -144 -36 -254 -125 -254 -206 l0 -25 508 2 507 3 -3 30 c-9 79 -92 145 -237 190 l-70 21 -22 71 c-12 38 -27 108 -33 154 -13 88 -19 354 -8 364 3 3 37 10 74 16 219 29 225 118 12 146 l-48 6 35 35 c80 83 103 212 55 320 -55 125 -213 201 -340 163z" />
const NoneShape = () => <Path></Path>

const fenValues = {
    'k': King,
    'p': Pawn,
    'n': Knigth,
    'b': Bishop,
    'r': Rook,
    'q': Queen,
}


function Shape({piece}) {

    

const shapeValue = {

    1: KingShape,
    2: PawnShape,
    3: KnigthShape,
    4: BishopShape,
    5: RookShape,
    6: QueenShape
}


    let shapeCode =  piece & ~(white | black);
    
    return (shapeValue[shapeCode]());
}

export function fenToPieces(fenString) {
    
    
    let file = 0;
    let rank = 0;
    

    let pieceShapes = Array.from(Array(8), () => new Array(8).fill(null))
    fenString.split('').forEach(char => {



        if (char === '/')
        {
            file  = 0;
            rank++;
        } else {
            if (isNaN(char)) {
                let color = (char.toUpperCase() == char) ? white : black;
                let piece = fenValues[char.toLowerCase()]
                pieceShapes[file++][rank] = piece | color;
            }
            else {
                file += parseInt(char);
            }
        }
    });
    return pieceShapes
}