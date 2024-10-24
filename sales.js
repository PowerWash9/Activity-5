"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//Initialize the arrays to hold the sum of the regions and quarters
const quarterSum = [];
const regionSum = [0, 0, 0, 0, 0];

//Initialize the total for all quarters in all regions
let total = 0;

for (let i = 0; i < 4; i++) {
    //Each quarter's sum for all regions
    quarterSum[i] = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];

    //Each region's sum for all quarters
    regionSum[0] += region1[i];
    regionSum[1] += region2[i];
    regionSum[2] += region3[i];
    regionSum[3] += region4[i];
    regionSum[4] += region5[i];

    //Total amount for all regions in all quarters
    total += quarterSum[i];
}