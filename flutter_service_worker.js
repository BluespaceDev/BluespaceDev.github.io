'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f009b7f5fcb95208a03fe46e649d490d",
"index.html": "159469ebaf911224df2a7636ff30c4a9",
"/": "159469ebaf911224df2a7636ff30c4a9",
"CNAME": "b085bd1908aa08ec6b05b128cb7de7af",
"main.dart.js": "e664ec3c19f38b68d0dcfbd0b953f41e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "24c3a6b7e80663a8eef82a567c91d2b7",
".git/ORIG_HEAD": "964b94aaffa520a0b53c0416f1ce786b",
".git/config": "a309e376cd4fdd76861428050bffbd58",
".git/objects/61/87b6a8eb04eca98b8279f2af053a5e99f7ee56": "70f28096c5ae9068f8f9fbfd263adce1",
".git/objects/59/3e0135b61a9eb0e6bd93872e14aed8b28edd8d": "d77f2e28f6d8fd9be01525eddfd804ca",
".git/objects/9b/5f98b6ab4cb31bbe17bb3628fcd76cdf180cff": "054bb1438cd8886b4257dc8d91630062",
".git/objects/9b/1f16afbd95e1f83a9b7751bc5e7e221bdf1d59": "d5e3e9397f15a333c6bc2cf5c4650dc8",
".git/objects/3d/43381f986e1c6abbe35d0fdf955fd9ac69d9cb": "260699840722948ad55377cd8074d7f2",
".git/objects/0b/896ec18976da120194ef25b35816af460ec4b8": "5c1303a975d61b8f6bae4e06ececbf98",
".git/objects/0b/cd72f525a170eec779af2d41f56fb3ac7c2b7b": "f8fff2fac368956f9b27e4ed46158449",
".git/objects/93/a57ed5b6c400af2bb4d80be571416b4a93f6fa": "d90ee79b64daaa4cd125935598c92181",
".git/objects/60/f96e193f4500f44a6e42286755099e09c63042": "8c730c8e8ef4568a0087a85f537ff9d9",
".git/objects/34/6534304070696850805fc6601303c8fc7ca87f": "6ab834ac8375071b52099073fb2309ba",
".git/objects/5a/9ff53a1c2146aac2c3ed438f8d6def1ce65a55": "f7e09fa5f47acea0fbeb95448605ce79",
".git/objects/5a/7094b5f5a3a9a9d706d674c8fc98d2cc194598": "c6df09bd7d40d0fbc53e5c76d031f4a7",
".git/objects/b2/79c9f9b2bb0683a9ecc5eb927c0e5a27b71188": "0124434a082c2dc2012043d29a5d1f4d",
".git/objects/b2/37589f1cdafb92bcf55434c5044e33add54e4e": "791d05723013b22406c08697338e2457",
".git/objects/ac/c76d530c5bd45bf23c56e9bc244c193d3db87a": "165347730827b43d64890a2628fff1b5",
".git/objects/ac/f86fe41e249e17e141136ec77b0ab9379f3b38": "0ac05e819afb5a038856eba3a16be107",
".git/objects/d7/5ef6f0983e0b08899f4e9211c7dd1d038893f4": "33764b49c8a706763ed21d68d0850b52",
".git/objects/da/db6d7b38a8276b847fd12012530fb6893f85c5": "d000de438f3d02915db8115851173a5c",
".git/objects/a5/787e5d8a2ad2f7e99e452fb312e08e4c386134": "aa6bf5ef7e95983728c3617a09e95b8a",
".git/objects/bd/48e6cc466c13a150fd0648b2789afae107c3f5": "56f5b5a71227a4eb2a1f08acd507d84d",
".git/objects/d6/faf7fae34e4e0f416e4776d631a8870344cb46": "c19f2bf09cec94fc7b20663726b096e6",
".git/objects/d8/0c5c232686df94e0b714a07dd95df11e6baa47": "60779f5811258f800df0a1b831caaf37",
".git/objects/d8/4d0f32e33c24a99830988b2c6a7a7cc9914ec0": "69d47a31dfa428c298630d297787ca86",
".git/objects/d8/9da780340c3ff152839494da96723d94b90a61": "ded1ce6bb30266a76e7a49336a55e852",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/12eb37d722453f4091ae04a743ced45eebdf87": "9d9d79dd1bfbb6b3375ea9f26813ebd1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/5efa6300a8b71bd01296d96a18f493a6bcdecc": "84107fba3e72e2ee5267473378edfff0",
".git/objects/f3/4796a529f4a6ee767933e56840dc02e064a9e2": "8f0f5379eb83b4f96b37c7308b9a3b78",
".git/objects/fc/c3a46fd33625c80808fef37da806cafabd79ec": "7a2bce62b55e36d8db1fa381d70c6f53",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/c94ba997dba6d6aa36945ff9bf75a4de64300b": "61f9d371e7b8511f6e317988c5571336",
".git/objects/e3/29d27e5a53e74d1c9f3589db1aa9c8f6ef35b7": "7144fb3ea424620b372491c9b14c3607",
".git/objects/cf/c709730415c68dbd7d222de8469925c5127f3d": "51677e04d90e679d5fdbfe82651d0d0d",
".git/objects/ca/49eed010b9d5694d6d5be74c3e1730dac27594": "73d01c0698149e01e23b49787933e807",
".git/objects/ca/cf346ace970b402d575a09fb91e5a5db1d4df2": "85ff07af2b34b682868537ac9f376a9f",
".git/objects/fe/463dc285bbf651653adb53c8aa5631031a89e7": "95231424bd52e560bb4b2ec7edbe62d0",
".git/objects/c8/8537940688a48cd4db54205c34fe297b6b3a79": "fe31d1cc5544e582be5cf5e69cf40cfd",
".git/objects/fb/29772c7e098de0bb6b628a5957eed0c4bec333": "7febd80971e612029d08b6201396ff59",
".git/objects/4e/89e54cb22e1295e097cfbdd5ca56152bd9f01a": "600e069264e10bc91607793c495edefd",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/2876f735b478938996c260a0490a178e760261": "fc655aefa70bb6b929b17237f61b2329",
".git/objects/42/0f9a6b2eb0e702212b7ecea0a6ada3955a2f79": "602f5e4fcb56b01d97857428bc479d49",
".git/objects/89/b318e0ee4a2cd50ff1897bfac440c67bb1019e": "618d424372bd8284d89db518e4cb804f",
".git/objects/73/0e9fe9f075c4d8b702b78cafeea0a46674b984": "e06ec9e9a5998887d2763b6f0453e633",
".git/objects/7b/43735ef1a7bc44ba2499204bde6cab31e85c01": "908d586f7e1d0cb4bb25b6b7ce113874",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/3f81b1fbc715b7b7e382bcf0b9fd07be4477fd": "40b7b30155cc6e3c31cd5a318f71611e",
".git/objects/7e/882f8031a9b9278a0d47ec8237d2512d49409f": "1a8299f9742f086ecfa16a7a552a4d6c",
".git/objects/7e/791a1cdcf9fdca65f0eec5988fe8f8be8ec100": "8c52cf865f3695c761252f947095bf92",
".git/objects/7e/a04ab30e5d4f84d46c1207a822595e19d50210": "4e4ba9ebf67c49b19d175dc21a2babfc",
".git/objects/7e/7fe74aab8d95db4152d0e33a60c782cfdf3f51": "5380e51455cd259d58ef202ea49b5b9a",
".git/objects/10/fa46d8d706b67e2e24d16eb0a3571c6b6373f4": "5b02ddd8db3aa9df7840853af083b3e7",
".git/objects/10/b81432f4357b38ed6219bbf152afef22748386": "7ecae0c1459f3ba983bb8305b03eab15",
".git/objects/19/2e64908fc0d6ad2481864fe1b6e4db4a1162d6": "fcfd3729f10d2141c9d91890f5335aa4",
".git/objects/21/63cddeb825421c6dd357fd5aec7328e4c73dfa": "355d1effb29b149a4b8115d09caefd71",
".git/objects/4d/420f8a697f3266e10b06d84b98ba6cd359d379": "0ac2aecfb5772d3d3d6fde11cd636d76",
".git/objects/72/534e558c3f8b96c2e808e1f14f818f04b8ca61": "2a369a2b07389a1f392e766d8f66769b",
".git/objects/44/fb7436ec72c81e05e79cb57e6eccf482e6e129": "6daa68d00bb0d4e8e13976e0d08dae51",
".git/objects/44/4b01e0d6aae9f60e378f2261bfef310b484790": "3dbe03475ef3196f078a8e49b8781df8",
".git/objects/2a/c10f55c03ae70aa1270e196d7f00ff46226a53": "541d63ef3346f1cbbb286a31616d08e8",
".git/objects/2f/96f949bbeeec52d99dd368a69aba07472b81ab": "7f4de7051fde996ec5e58bf05f62a387",
".git/objects/43/d1a36ffa7195b89b85b4ea24eb2c369f4c9af1": "a9bbb2368811178dfcf38345ab670421",
".git/objects/88/1f8eb61e9b9503a8e7b8ce20d7428169e8bd0e": "d09f3747894e707ff9530a6e96594e5a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/b7313b984fcd1cfe953153e9a3bb06bcdbeafd": "34320c9311897ce562ce20293b8dcdc0",
".git/objects/07/d3966111a0ace137177589a3c09427bd21913b": "29dc225907cd98517e634118d44c9ae9",
".git/objects/6e/1fbc85458759f1265e33184fb58708a20523d7": "e5f33c5454b3bc72a3905db65c06542b",
".git/objects/36/e87a7fd64f92a9abf7d75d0f426af3981ebc45": "7dff353536b88a72a820d64da1b699e0",
".git/objects/5c/f8792046c6e420a5407ab3b6898612db462179": "8f0b8fdadb2b45dc586cea996c8348e9",
".git/objects/5d/fe9d7225ef3e880c697634d8104bf3603e2279": "2e6e580ca91e34f1e44270a83b2c1150",
".git/objects/5d/748e2936aab3b31ae3b8ac8a929974698d28d3": "b3234e11ac5b73044f9ba387a707d17e",
".git/objects/65/b9422017fb42a927947007a27a31b23c52c968": "a473d866c7909bbf51fa3494abe9fb1c",
".git/objects/5e/e67da58bd2326befc8c6f8a76ef6101eabaeb8": "b528d4fd6fab3a9a2efee5fb322c6e6f",
".git/objects/5e/59be4e7ba9ab41011201a96e269e1c3ae18cd0": "791c5877244bc929b64e695f63cf3b4b",
".git/objects/5e/d21039d38d8f346af80212577e49e5574f7e7b": "a9172ffe7e9248da0279cd60e8743eb8",
".git/objects/5b/20e086e416a434c27c6bbbda8ad2ced1456fd4": "10e2eba1e8f34da1f3c4f4a31dd14798",
".git/objects/01/1c63e34af50d6c03488b19851cb18ba5c313bd": "d7982ef1e4bf2086cb6f329f1fad1f22",
".git/objects/06/e53f28fd66b0983c9bf5012dcfda8a42704102": "8a67195302a1247192884a3385335208",
".git/objects/99/29d517191bab2816426f9e8ff452f8869f87bf": "2581fbcd13d7cb8390f4d64cf34a987a",
".git/objects/99/441383b0de036e29dc325b92836fdae3f89753": "550cc91f74d5ed426142fe2084248378",
".git/objects/55/860b051a1c26e8a560d34de725f03da5530a1e": "2125205aaa30399fe4dbb402f8a8985c",
".git/objects/55/7347c4b4318d10250275d7cc2d07272befae70": "34b8e679358bdeeb085598938513be8d",
".git/objects/63/998f8546cfa0da1b8b25a426f068e316e9fed7": "17df5c7c1972cff76bb82668eba4f133",
".git/objects/0f/ee8ab47ea48e85e87d3060b19c2117a52c1898": "3de14468dbd5e3d7b2feca59db7462f2",
".git/objects/0f/eff4193e80e92ac454cf94ac10cc75eede1767": "c149c42ad44f810ef070b140351dc8be",
".git/objects/0f/08689f64f75162c43b94201ddea027ec868ca6": "2b37371fdb514621d3a485bb0e74198a",
".git/objects/bf/93e55ee012b4fdf92446388d55dfc6c12bfe56": "84c08b487a35aec1f5753d905e4f3b88",
".git/objects/d3/79b33a7c9c1fc85e3785116311fa023774b002": "099e19d95e5a526b2e7e27b177df47af",
".git/objects/a7/6847de90310d5bf3c9666ffbb3dae95ef5f628": "19ebda4f5a269d5b16ee519ecf595f9b",
".git/objects/a7/25b1b4dbead01ca2dbbd24cb413afa0f0630c5": "f4daaff23c5b186a3a80928952c0b967",
".git/objects/dd/2ddb141ece5bf20c19eb2e1ce1f3ac5ec2a9c9": "b6906f2509966ad32815b7beef97f1c5",
".git/objects/d5/577f922c5679b59d025b062ee79f430689e29f": "dcfa7a6f476594be38b896e549218baf",
".git/objects/aa/3e019c9616b2d23da11d5fef66e76914ed183e": "d2bbc44eb400fcc6c0603c13a28d4474",
".git/objects/aa/029e90881b5b4b299730fe5b1608ef6c428360": "325e44f13ff0f7c041fcb8b00ac956e1",
".git/objects/b7/89bb7a5e3b6d7d4cc05d2d0c784d7cd9da43c5": "de9caea40ff44d6dfd2de1e7779c315c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5bd8498371c828993a03b06d1e187331579684": "c0a82195bfa1e00b9a1f0b576632cea1",
".git/objects/db/49c0f20cfd1113df0a7906fbf36500ed02f13a": "17b6628393100a83e60a8334687670d4",
".git/objects/a8/5f51cdec95af69ab99a1c303690001ebdb7f73": "96e4f79920c719312af9cde9bfcfd5d8",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/7dc71d0e8701a2a251b0bc25bac1b1f36beda2": "182a24eedbff858690f0a0db2dd86bb8",
".git/objects/a6/9da7d4392bda9ebaf3344e7ba98094aa7e7d4e": "ec58435939131a972aec619c98aed618",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/4a6a9f4c71e627432142dcc003cb801ef874f8": "cba2595b6756f590cad96c5581d92b50",
".git/objects/c3/1486832e412992e7d7e3c93665329e35ad7050": "e283238722b251a4b5600fefc4f51c27",
".git/objects/c3/4028dd8ad79ec25aa6a940689846bf6b00d217": "73e5d7ef42892e876681349ae874e4c9",
".git/objects/ea/eb11c2625d98d1f2ac864d9db94393702d6a10": "41584a55ce199a33aad6b5b6cff4653a",
".git/objects/e1/928c0e3e855be6c599a408f9f2b95e09d87e82": "8106ee4780ebf9b8323821c16c98a4c5",
".git/objects/cd/4beb368b5450477e818a9195a714b52779c57d": "d7756c62d01fba80c5e13f5ad76dddef",
".git/objects/cc/dc10bc8e4603c410aab3fa8e2dd9333fc7bba7": "cdde14ae4cbb04137a29dff89bd5f96c",
".git/objects/e6/259143ab4dd49ea2f88d7e9c38f6d483f0a2f6": "8126a5b5fffc7e0844c23c73091196ab",
".git/objects/e8/70342b7c1f384aa2fc330fcbd9ede9d04f43f2": "4608b0820f4c42ee23bdaf62854be92a",
".git/objects/fa/690a392052d4c006253c0c771d33e551ea53ec": "99d91b8a96cfc54384d5f9e662193416",
".git/objects/ff/56188ce416022238572aa2bf63e88dbd654ee6": "fc2fe2d244c908d403fa27573825fee5",
".git/objects/ff/d9faba61bf5993fb65ab6afc18ea6ab3cf00ad": "1976d7ec8155e971c0c443e61c2bbde2",
".git/objects/c5/a4510b221b7a0e50a0516a64a29f58651a0257": "8cafb11e7d6fbde1cb8e788a889512a5",
".git/objects/e7/970ce24cc0c4a9ab1af62185a61ab4320e2240": "45d2682c29e2f05218fae0499c2e673a",
".git/objects/f8/8d3fe12d09a7c15c2b375ef9716c650b9ab0f2": "8ab6a6c14137c741fc98d629fc088128",
".git/objects/ce/498329a5cc79944f4da7445b13aa5ef391ad10": "c4b56b19f5c3becf4ad8c351d9cb0c3f",
".git/objects/ce/5d17a425efd1b1e3197fe0d26141618b58aaa8": "0d022f5239187e45b97f3835837182ed",
".git/objects/e0/b4f63f944f46f6e2cd199aba047c84e3d96a20": "ca4ad22ca70005e66a3a61bda69b92c3",
".git/objects/e0/a9fe03e6bd7e5cb8d525cc0e17bcfd6c7e7424": "4f39a0f9b7617e4f42fdcbd882f24797",
".git/objects/46/4b24417b9f2f9e8214f4e6d6fe247512529379": "ee8a3b1d6e46a1597df01d045ef9d611",
".git/objects/2c/9abb379399aaf387e4cad227811e72336cf1fc": "6e396bf1ef7dda249116c648a8321dac",
".git/objects/79/02e64adf376c594d54d4bcefbe99a42caa7796": "331b6d93c34e1fde2c8658c4f13d81b5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/e5557ade7e8bd7cacb041eed26e6c55517a4a1": "ee6bad01981a4425ef2b3e564fbba143",
".git/objects/1b/0fc02880dfd3087368fef2e785719a6b6e18ee": "7b7e4f84b0ee70f532ed13592073f058",
".git/objects/77/5ba9c186558baf08660094ad16dbe7ffc89ee3": "6e02ed8b0e27cf62651ba0eb5c842421",
".git/objects/48/39013f467ddecc16cbe4c70395bc22cf0c09d0": "4ab7b3b226791385f3c21d4df18a3475",
".git/objects/84/0d6365a37e585840a43c8b524ffcf864321c1a": "f21388245f347ab3a9e55f3890bf8e37",
".git/objects/84/9b787ec8b4c0e3ea3e17cf6a37cf7e8b4f97e8": "05535360d519be618849b58e2f910686",
".git/objects/84/99375b4485a916e3813cf0caaf8b5f4d93607b": "db6e1c20205fb58bf5295fda6c6c367a",
".git/objects/24/e5f76343dc34badd3d3482a27ef16a642d5c17": "9faa3e6872c3498c456e1b64bbb8e9ae",
".git/objects/23/8d44eac75017e2e2bb6929ec3c5b293f37942f": "dfdce5bbc87003fed6f1a33f9aae6ac9",
".git/objects/23/440aaa4643236b1d2d60fe5b4250b339fba6ed": "d1bbb7fdea7cb45fa4f61e79095a4f6a",
".git/objects/23/e04fc1bb5c89b644fb3976dda1a24102d0e8bf": "03a0a7f8c443c3fa02dce9afc612189b",
".git/objects/15/5c4dbd17a8efcd19f54c082cf51180e03dab87": "91257d293c6b257b9bc809485c24e4fd",
".git/objects/15/b6dd1af0692aa05292247591bf5b46910f7a84": "1921f7e9a73f864752e3b4ccacee5d3c",
".git/objects/85/13d15883d1f503d4f5cad95421dace3a8b58c5": "028c4c8fcdee6b48929043d0b9b50aba",
".git/objects/71/7b0256ae1c009b101a725a032d9eff9508c8bf": "01a320e4525b0a08fb81cbc8c2ece047",
".git/objects/76/8145b54034903ec57133ea78495af33ccfad64": "7cdcc125fe9e7867856b22b288adc3a2",
".git/objects/82/db628bb412f65dc71813564dcc0fff1d184bca": "ce68a04b7f314396cef6b979d7b8c11c",
".git/objects/49/4c68db86034021cd653726500ba268fc048b2a": "03821e57a207b545cf368a22fcdb248f",
".git/objects/40/f7411e3fb38d4ce58855b9a4ca13e70bb5c071": "d4255eac73ba592aa4b5bbbf5ad4abdb",
".git/objects/78/c118efcb804383cc68a5502cee9f9f949d212a": "001f2a5959b983e9b83d3910159ca1ef",
".git/objects/78/97d203454fa4493f0966fa3574bd977320aa2a": "3930613ed5186a737c4d68730447ae63",
".git/objects/7a/81da68b91d78d78cee53756dd4e169214caf90": "9e3e8cb2bf6831457027f490e1392be3",
".git/objects/22/88440838b7cf442beb926bf5786d5a34737d44": "c18506e2c779dbf34b50005e4f0aa8d6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d22bfbecb2d24ead9eef21d4831b5ef3",
".git/logs/refs/heads/master": "d22bfbecb2d24ead9eef21d4831b5ef3",
".git/logs/refs/remotes/origin/master": "bef030d0d0fb5f8fd6bc99ae4651c97d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e9bbba9405ddba860daf9915480b3381",
".git/refs/remotes/origin/master": "e9bbba9405ddba860daf9915480b3381",
".git/index": "bd5a174349bf888350bbea1df622ab44",
".git/COMMIT_EDITMSG": "44f1b28322c5005baebc147bb38224dc",
".git/FETCH_HEAD": "8083ec50b323c2b3360c51612d386380",
"assets/AssetManifest.json": "67d53ae70bbaf1d7b887d384a1721b86",
"assets/NOTICES": "485ce9e4e1734f476a7dea9635920b27",
"assets/FontManifest.json": "28f71c0d53a4204f527f31bdc8cdb9a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/MSS_0487.jpg": "1999c2eb0029d6e1b9d67815ae49f0a1",
"assets/assets/images/MSS_0108.jpg": "69edfa7ad1b01f1bb01129a917b9aa66",
"assets/assets/images/MSS_0096.jpg": "d2ec510f49d814c872d64382620a2e70",
"assets/assets/images/MSS_0029.jpg": "6aecc55a9e77c7cddb25934f71559463",
"assets/assets/images/MSS_0005.jpg": "b6f3fc8449288da770fe1a35bcd79ffa",
"assets/assets/images/MSS_0063.jpg": "dc6ffe046aa5c6f556ae495b1c7ee071",
"assets/assets/images/MSS_0528.jpg": "3ed60dde5c409af33b1a3ca24e9759e7",
"assets/assets/images/MSS_0138.jpg": "3dbbedd5c3064bd3d2b16c5665470929",
"assets/assets/fonts/netmarbleB.ttf": "83ba63be06db2a4b0e404d77b84f749d",
"assets/assets/fonts/netmarbleM.ttf": "94728ed4057d4e4af9f0889caa8cb465",
"assets/assets/fonts/netmarbleL.ttf": "a64945d1d7ea451417fa3a982fd42715",
"assets/assets/fonts/NanumBarunGothicLight.ttf": "2173408a75c7faf4db58547ecc024fdc",
"assets/assets/fonts/MaruBuri-Regular.ttf": "33e46be46ed6282f3d6c8833670d916b",
"assets/assets/fonts/NanumBarunGothic.ttf": "0384532820e984ca0dc4a140d11b12d4",
"assets/assets/fonts/NanumBarunGothicUltraLight.ttf": "ba680ddc323220881ed95a3d26d6698b",
"assets/assets/fonts/NanumBarunGothicBold.ttf": "3b18e24ea5237f4d6e2731c17ca7f164"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
