var Notes = [
   //存储格式：[ 时间（帧数） , 个数(2个及以上会连续出现,相当于长押) , 颜色序号(0:蓝色，1:黄色，2:红色) , 位置 ]
   //目前全靠目测，不过一秒60帧是知道的，找个节奏加也能凑活写
   [444, 1, 0, 'left'],//565
   [470, 5, 1, 'right'],//591
   [508, 1, 1, 'left'],//631

   [655, 1, 1, 'right'],
   [681, 5, 2, 'left'],
   [719, 1, 2, 'right'],

   [847, 1, 2, 'left'],//973
   [848, 1, 2, 'right'],//974

   [874, 8, 1, 'right'],//1000
   [875, 8, 1, 'left'],//1001

   [1053, 1, 1, 'left'],//1179
   [1079, 1, 0, 'right'],//1205
   [1095, 1, 0, 'left'],
   //2
   [1251, 1, 0, 'left'],//1381
   [1287, 5, 1, 'right'],
   [1325, 1, 1, 'left'],

   [1472, 1, 1, 'right'],
   [1498, 5, 2, 'left'],
   [1536, 1, 2, 'right'],

   [1664, 1, 2, 'left'],
   [1665, 1, 2, 'right'],

   [1691, 8, 1, 'right'],
   [1692, 8, 1, 'left'],

   [1870, 1, 1, 'left'],
   [1896, 1, 0, 'right'],
   [1922, 1, 0, 'left'],//2040

   [1972, 1, 1, 'left'],//2100
   [1998, 1, 1, 'right'],//
   [2020, 1, 2, 'left'],//
   [2046, 1, 2, 'right'],//

   [2069, 1, 2, 'right'],//,32连续,第一个和第四个插一个
   [2095, 1, 2, 'right'],
   [2121, 1, 2, 'right'],
   [2147, 1, 2, 'right'],
   [2168, 1, 1, 'left'],
   [2173, 1, 2, 'right'],
   [2199, 1, 2, 'right'],
   [2225, 1, 2, 'right'],
   [2251, 1, 2, 'right'],
   [2252, 1, 0, 'left'],

   [2277, 1, 0, 'left'],//,32连续
   [2303, 1, 0, 'left'],
   [2329, 1, 0, 'left'],
   [2355, 1, 0, 'left'],
   [2356, 1, 1, 'right'],
   [2381, 1, 0, 'left'],
   [2407, 1, 0, 'left'],
   [2433, 1, 0, 'left'],
   [2459, 1, 0, 'left'],
   [2460, 1, 0, 'right'],

   [2485, 1, 0, 'right'],//,32连续
   [2511, 1, 0, 'right'],
   [2537, 1, 0, 'right'],
   [2563, 1, 0, 'right'],
   [2564, 1, 1, 'left'],
   [2589, 1, 0, 'right'],
   [2615, 1, 0, 'right'],
   [2641, 1, 0, 'right'],
   [2667, 1, 0, 'right'],
   [2668, 1, 2, 'left'],

   [2693, 1, 2, 'left'],//,32连续
   [2718, 1, 2, 'left'],
   [2743, 1, 2, 'left'],
   [2768, 1, 2, 'left'],
   [2769, 1, 1, 'right'],
   [2793, 1, 2, 'left'],
   [2818, 1, 2, 'left'],
   [2843, 1, 2, 'left'],
   [2868, 1, 2, 'left'],
   [2869, 1, 2, 'right'],

   //转折部分
   [2879, 4, 2, 'left'],
   [2930, 4, 2, 'right'],
   [2982, 4, 1, 'left'],
   [3034, 4, 1, 'right'],
   [3086, 4, 2, 'left'],
   [3138, 4, 2, 'right'],
   [3190, 4, 1, 'left'],
   [3242, 4, 1, 'right'],

   //快速部分
   [3294, 1, 1, 'left'],
   [3306, 1, 1, 'left'],
   [3318, 1, 1, 'right'],
   [3330, 1, 1, 'right'],
   [3342, 1, 1, 'left'],
   [3354, 1, 1, 'left'],
   [3366, 1, 1, 'right'],
   [3378, 1, 1, 'right'],
   [3390, 1, 0, 'left'],
   [3402, 1, 0, 'left'],
   [3414, 1, 0, 'right'],
   [3426, 1, 0, 'right'],
   [3438, 1, 0, 'left'],
   [3450, 1, 0, 'left'],
   [3462, 1, 0, 'right'],
   [3474, 1, 0, 'right'],
   [3486, 1, 1, 'left'],
   [3498, 1, 1, 'left'],
   [3510, 1, 1, 'right'],
   [3522, 1, 1, 'right'],
   [3534, 1, 1, 'left'],
   [3546, 1, 1, 'left'],
   [3558, 1, 1, 'right'],
   [3570, 1, 1, 'right'],

   [3596, 1, 0, 'left'],
   [3622, 1, 1, 'right'],
   [3648, 1, 1, 'left'],
   [3674, 1, 2, 'right'],

   //30秒段
   [3717, 3, 2, 'left'],
   [3718, 3, 1, 'right'],
   /*[3727, 1, 0, 'left'],
   [3728, 1, 0, 'right'],
   [3737, 1, 0, 'left'],
   [3738, 1, 0, 'right'],*/
   [3816, 1, 1, 'left'],
   [3842, 1, 2, 'left'],
   [3868, 1, 2, 'right'],
   [3894, 1, 1, 'right'],

   [3920, 3, 2, 'left'],
   [3921, 3, 1, 'right'],
   /*[3930, 1, 0, 'left'],
   [3931, 1, 0, 'right'],
   [3940, 1, 0, 'left'],
   [3941, 1, 0, 'right'],*/
   [4019, 1, 0, 'right'],
   [4045, 1, 1, 'right'],
   [4071, 1, 2, 'left'],
   [4097, 1, 1, 'left'],

   [4123, 3, 1, 'left'],
   [4124, 3, 1, 'right'],
   /*[4133, 1, 0, 'left'],
   [4134, 1, 0, 'right'],
   [4143, 1, 0, 'left'],
   [4144, 1, 0, 'right'],*/
   [4222, 1, 2, 'right'],
   [4248, 1, 1, 'right'],
   [4274, 1, 2, 'left'],
   [4300, 1, 1, 'left'],

   [4352, 1, 1, 'left'],
   [4378, 1, 1, 'right'],
   [4430, 1, 0, 'left'],
   [4456, 1, 0, 'left'],
   [4482, 1, 0, 'right'],
   [4508, 1, 0, 'right'],

   //重复一遍
   [4534, 3, 0, 'left'],
   [4535, 3, 0, 'right'],
   /*[4544, 1, 0, 'left'],
   [4545, 1, 0, 'right'],
   [4554, 1, 0, 'left'],
   [4555, 1, 0, 'right'],*/
   [4632, 1, 1, 'left'],
   [4658, 1, 2, 'left'],
   [4684, 1, 1, 'right'],
   [4710, 1, 2, 'right'],

   [4736, 3, 2, 'left'],
   [4737, 3, 2, 'right'],
   /*[4746, 1, 0, 'left'],
   [4747, 1, 0, 'right'],
   [4756, 1, 0, 'left'],
   [4757, 1, 0, 'right'],*/
   [4835, 1, 1, 'right'],
   [4861, 1, 0, 'right'],
   [4887, 1, 1, 'left'],
   [4913, 1, 0, 'left'],

   [4939, 3, 0, 'left'],
   [4940, 3, 0, 'right'],
   /*[4949, 1, 0, 'left'],
   [4950, 1, 0, 'right'],
   [4959, 1, 0, 'left'],
   [4960, 1, 0, 'right'],*/
   [5038, 1, 0, 'right'],
   [5064, 1, 1, 'right'],
   [5090, 1, 0, 'left'],
   [5116, 1, 1, 'left'],

   [5168, 1, 2, 'left'],
   [5194, 1, 2, 'right'],
   [5246, 1, 1, 'left'],
   [5272, 1, 0, 'left'],
   [5298, 1, 1, 'right'],
   [5324, 1, 0, 'right'],
];
//色块下落速度
Notes.fallSpeed = 650;
//歌曲BPM(不知道咋测)
Notes.BPM = 1;
Notes.len = 246;

module.exports = Notes;