export function generateProducts(n = 200) {
    const products = [];
    for (let i = 0; i < n; i++) {
        const product = generateProduct(i);
        products.push(product);
    }
    return products
}

function generateProduct(i) {
    return {
        id: i,
        name: getRandomString(),
        description: getRandomString(),
        color: getRandomColor(),
        price: Math.floor((Math.random()*9990))+10,
        rating: Number((Math.random()*5).toFixed(1)),
        imageUrl: getRandomUrl(),
    }
}

function getRandomString() {
    return Math.random().toString(36).substring(2);
  }

function getRandomColor() {
    const colors = ["Red", "Green", "Brown", "Yellow", "Blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function getRandomUrl() {
    const urls = ['https://elema.by/upload/resize_cache/iblock/3e2/2a2q1hdu3oyo2j0p3woro32ijkqvbf95/500_750_1/Dzhemper-muzhskoy-PL3219-krasnyy-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/565/awexf5r15mnsx8d9gl01pxgm61psty5c/500_750_1/Palto-muzhskoe-plashchevoe-uteplennoe-5M_880-grafit-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/0b0/38bpkms0b93rcuscz54gte4324s8od3o/500_750_1/Dzhemper-muzhskoy-PE3603-khaki-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/340/plhd8038mp6e4bugvvzwe5k2j1eyckap/500_750_1/Kurtka-muzhskaya-plashchevaya-uteplennaya-4M_873-chyernyy-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/ed8/r95oc9ma2kblz9sva99glasnf30fzxrr/500_750_1/Palto-muzhskoe-demisezonnoe-1M_1114-poloska-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/545/mhwi6uvt9suj8jeb14p1qlcgmeh31jjh/500_750_1/ZHilet-muzhskoy-plashchevoy-uteplennyy-4M_709-tyemno_siniy-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/c8f/ugteq2whcokuh57ew1384t86jht0bkew/500_750_1/Kurtka-muzhskaya-plashchevaya-uteplennaya-4M_883-seryy-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/677/ew8g78009to5kxbwkhs1ncw53wa01l5n/500_750_1/Kurtka-muzhskaya-plashchevaya-uteplennaya-4M_712-chernyy-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/be8/0cckn31zuym1uthqy2oz12h9n0iuurzb/500_750_1/Kurtka-muzhskaya-plashchevaya-uteplennaya-4M_710-temno_siniy-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/310/von4g7w0yvic231i0a3o3n640j5799dk/500_750_1/Sorochka-verkhnyaya-muzhskaya-BS2002-goluboy-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/678/ii8tumphztmqbgry62w1483qrmc4wrfr/500_750_1/Palto-muzhskoe-demisezonnoe-1M_705-tvid-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/84f/cyi45a6bv1kuat7vfwxd0i2a4aznxkae/500_750_1/Sorochka-verkhnyaya-muzhskaya-BC2003-belyy-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/fc9/q6jzei9bis6if34bxzuvxmes6yv5bbyc/500_750_1/Sorochka-verkhnyaya-muzhskaya-40350-goluboy-_1_.jpg',
        'https://elema.by/upload/resize_cache/iblock/56f/rfs9r8hunuzsckklt15a8wsmcubn0s49/500_750_1/Sorochka-verkhnyaya-muzhskaya-BC2001-svetlo_goluboy-_1_.jpg',
    ]
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
}