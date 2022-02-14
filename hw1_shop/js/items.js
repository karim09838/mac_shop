const items = [
    {
        id: 1,
        category: 'mac',
        imgUrl: 'items/macbook-air.png',
        name: 'MacBook Air',
        display: 13.3, // дюймы
        color: ['Gold', 'Silver', 'Space Grey'],
        price: 999, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 8, // Гб
        storage: 256, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.61', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.29', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 435, // кол-во едениц товара в наличии
        	reviews: 77, // процент положительных отзывов
        }
    },
    {
        id: 2,
        category: 'mac',
        imgUrl: 'items/macbook-air.png',
        name: 'MacBook Air',
        display: 13.3, // дюймы
        color: ['Gold', 'Silver', 'Space Grey'],
        price: 1249, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 16, // Гб
        storage: 512, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.61', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.29', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 84, // процент положительных отзывов
        }
    },
    {
        id: 3 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro13.png',
        name: 'MacBook Pro 13',
        display: 13.3, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 1299, // доллары
        chip: {
            name: 'Intel Core i5',
            cores: 8,
        },
        ram: 8, // Гб
        storage: 512, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.56', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.4', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 25, // кол-во едениц товара в наличии
        	reviews: 85, // процент положительных отзывов
        }
    },
    {
        id: 4 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro13.png',
        name: 'MacBook Pro 13',
        display: 13.3, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 1499, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 16, // Гб
        storage: 1024, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.56', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.4', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 256, // кол-во едениц товара в наличии
        	reviews: 80, // процент положительных отзывов
        }
    },
    {
        id: 5 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro16.png',
        name: 'MacBook Pro 16',
        display: 16, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 2399, // доллары
        chip: {
            name: ' Intel Core i7',
            cores: 6,
        },
        ram: 16, // Гб
        storage: 1024, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.62', // cm
            width: '35.79', // cm
            depth: '24.59', // cm
            weight: '2', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 124, // кол-во едениц товара в наличии
        	reviews: 91, // процент положительных отзывов
        }
    },
    {
        id: 6 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro16.png',
        name: 'MacBook Pro 16',
        display: 16, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 2799, // доллары
        chip: {
            name: ' Intel Core i9',
            cores: 8,
        },
        ram: 32, // Гб
        storage: 2048, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.62', // cm
            width: '35.79', // cm
            depth: '24.59', // cm
            weight: '2', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 69, // кол-во едениц товара в наличии
        	reviews: 90, // процент положительных отзывов
        }
    },
    {
        id: 7 ,
        category: 'mac',
        imgUrl: 'items/imac.png',
        name: 'IMac',
        display: 21.5, // дюймы
        color: [  'Space Grey'],
        price: 1099, // доллары
        chip: {
            name: 'Intel Core i5,',
            cores: '6',//dual‑core
        },
        ram: 8, // Гб
        storage: 256,
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 4.2 '],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '45', // cm
            width: '52.8', // cm
            depth: '17.5', // cm
            weight: '5.44', // Кг
        },
        os: 'macOS',
        InTheBox: ['iMac ', 'Magic Keyboard', 'Magic Mouse 2', 'Power cord', 'Lightning to USB Cable', 'Polishing cloth'],
        orderInfo: {
        	inStock: 742, // кол-во едениц товара в наличии
        	reviews: 75, // процент положительных отзывов
        }
    },
    {
        id: 8 ,
        category: 'mac',
        imgUrl: 'items/imac.png',
        name: 'IMac',
        display: 27, // дюймы
        color: [  'Space Grey'],
        price: 1799, // доллары
        chip: {
            name: 'Intel Core i5,',
            cores: '6',//dual‑core
        },
        ram: 8, // Гб
        storage: 256,
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '51.6', // cm
            width: '65', // cm
            depth: '20.3', // cm
            weight: '8.92', // Кг
        },
        os: 'macOS',
        InTheBox: ['iMac with Retina 5K display ', 'Magic Keyboard', 'Magic Mouse 2', 'Power cord', 'Lightning to USB Cable', 'Polishing cloth'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 9 ,
        category: 'mac',
        imgUrl: 'items/mac_pro.png',
        name: 'Mac Pro',
        display: null, // дюймы
        color: [  'Space Grey'],
        price: 2499, // доллары
        chip: {
            name: 'Intel Xeon W',
            cores: '16',//dual‑core
        },
        ram: 64, // Гб
        storage: 1024,//
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '50', // cm
            width: '30', // cm
            depth: '60', // cm
            weight: '18', // Кг
        },
        os: 'macOS',
        InTheBox: ['Mac Pro', 'Magic Keyboard with Numeric Keypad', 'Magic Mouse 2', 'USB-C to Lightning Cable (1 m)', 'Power cord (2 m)'],
        orderInfo: {
        	inStock: 587, // кол-во едениц товара в наличии
        	reviews: 56, // процент положительных отзывов
        }
    },
    {
        id: 10 ,
        category: 'ipad',
        imgUrl: 'items/ipad-pro.jpeg',
        name: 'IPad Pro ',
        display: 11, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 750, // доллары
        chip: {
            name: 'A12Z Bionic',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // TB
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '24.7', // cm
            width: '17.8', // cm
            depth: '0.6', // cm
            weight: '0.470', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad Pro', 'USB-C Charge Cable (1 meter)', '18W USB-C Power Adapter'],
        orderInfo: {
        	inStock: 32, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 34 ,
        category: 'ipad',
        imgUrl: 'items/ipad-air.png',
        name: 'IPad Air',
        display: 10.9, // дюймы
        color: [ 'Silver', 'Space Grey','Rose Gold','Green','Sky Blue'],
        price: 549, // доллары
        chip: {
            name: 'A14 Bionic ',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '24.7', // cm
            width: '17.8', // cm
            depth: '0.6', // cm
            weight: '0.458', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad Air', 'USB-C Charge Cable (1 meter)', '20W USB-C Power Adapter'],
        orderInfo: {
        	inStock: 97, // кол-во едениц товара в наличии
        	reviews: 97, // процент положительных отзывов
        }
    },
    {
        id: 11 ,
        category: 'ipad',
        imgUrl: 'items/ipad.png',
        name: 'IPad',
        display: 10.2, // дюймы
        color: [ 'Silver', 'Space Grey','Gold'],
        price: 309, // доллары
        chip: {
            name: 'A12 Bionic  ',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '25.7', // cm
            width: '17.4', // cm
            depth: '0.6', // cm
            weight: '0.490', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
        orderInfo: {
        	inStock: 90, // кол-во едениц товара в наличии
        	reviews: 0, // процент положительных отзывов
        }
    },
    {
        id: 12 ,
        category: 'ipad',
        imgUrl: 'items/ipad-mini.png',
        name: 'IPad mini',
        display: 7.9, // дюймы
        color: [ 'Silver', 'Space Grey','Gold'],
        price: 309, // доллары
        chip: {
            name: 'A12 Bionic  ',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '20.3', // cm
            width: '13.4', // cm
            depth: '0.6', // cm
            weight: '0.300', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad mini', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
        orderInfo: {
        	inStock: 77, // кол-во едениц товара в наличии
        	reviews: 85, // процент положительных отзывов
        }
    },
    {
        id: 13 ,
        category: 'Watch',
        imgUrl: 'items/apple-watch-series-6.png',
        name: 'Apple Watch Series 6',
        display: 1.73228, // дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 399, // доллары
        chip: {
            name: 'S6 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,4', // cm
            width: '3.8', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Solo Loop', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 90, // кол-во едениц товара в наличии
        	reviews: 458, // процент положительных отзывов
        }
    },
    {
        id: 14 ,
        category: 'Watch',
        imgUrl: 'items/apple-watch-se.jpg',
        name: 'Apple Watch Series SE',
        display: 1.73228, // дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 309, // доллары
        chip: {
            name: 'S5 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 22.1654, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,4', // cm
            width: '3.8', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Band (can be configured for either S/M or M/L length)', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 79, // кол-во едениц товара в наличии
        	reviews: 69, // процент положительных отзывов
        }
    },
    {
        id: 15 ,
        category: 'Watch',
        imgUrl: 'items/apple-watch3.jpg',
        name: 'Apple Watch Series 3',
        display: 22.1654 ,// дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 309, // доллары
        chip: {
            name: 'S5 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 8, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,2', // cm
            width: '3.3', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Band (can be configured for either S/M or M/L length)', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 47, // кол-во едениц товара в наличии
        	reviews: 93, // процент положительных отзывов
        }
    },
    {
        id: 16,
        category: 'iphone',
        imgUrl: 'items/iphone_12.jpg',
        name: 'IPhone 12',
        display: 6.1, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 799, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 73, // кол-во едениц товара в наличии
        	reviews: 12, // процент положительных отзывов
        }
    },
    {
        id: 17,
        category: 'iphone',
        imgUrl: 'items/iphone_12.jpg',
        name: 'IPhone 12',
        display: 6.1, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 73, // процент положительных отзывов
        }
    },
    {
        id: 18,
        category: 'iphone',
        imgUrl: 'items/iphone_12.jpg',
        name: 'IPhone 12 Mini',
        display: 5.4, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 669, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '13.1', // cm
            width: '6.41', // cm
            depth: '0.7', // cm
            weight: '0.135', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 43, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 19,
        category: 'iphone',
        imgUrl: 'items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro',
        display: 6.1, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 999, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 84, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 20,
        category: 'iphone',
        imgUrl: 'items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro',
        display: 6.1, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 1099, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 512, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 2, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 21,
        category: 'iphone',
        imgUrl: 'items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro Max',
        display: 6.7, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 1099, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '16.0', // cm
            width: '7.8', // cm
            depth: '0.7', // cm
            weight: '0.228', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 5, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 22,
        category: 'iphone',
        imgUrl: 'items/iphone-se.jpeg',
        name: 'IPhone SE',
        display: 4.7, // дюймы
        color: ['Black', 'White', 'Red'],
        price: 1099, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '13.8', // cm
            width: '7.7', // cm
            depth: '0.7', // cm
            weight: '0.148', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 81, // кол-во едениц товара в наличии
        	reviews: 73, // процент положительных отзывов
        }
    },
    {
        id: 23,
        category: 'iphone',
        imgUrl: 'items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 98, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 24,
        category: 'iphone',
        imgUrl: 'items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 999, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 512, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Triple 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 115, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 25,
        category: 'iphone',
        imgUrl: 'items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Triple 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 26,
        category: 'iphone',
        imgUrl: 'items/iphone-xr.jpg',
        name: 'IPhone XR',
        display: 6.1, // дюймы
        color: ['Black', 'Coral', 'Yellow', 'Blue', 'White', 'Red'],
        price: 699, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 23, // кол-во едениц товара в наличии
        	reviews: 86, // процент положительных отзывов
        }
    },
    {
        id: 27,
        category: 'iphone',
        imgUrl: 'items/iphone-xs.jpg',
        name: 'IPhone XS',
        display: 5.8, // дюймы
        color: ['White', 'Rose Gold', 'Space Grey'],
        price: 699, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.3', // cm
            width: '7.0', // cm
            depth: '0.7', // cm
            weight: '0.177', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 12', 'USB-A to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 34, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 28,
        category: 'iphone',
        imgUrl: 'items/iphone-xs.jpg',
        name: 'IPhone XS',
        display: 5.8, // дюймы
        color: ['White', 'Rose Gold', 'Space Grey'],
        price: 799, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.3', // cm
            width: '7.0', // cm
            depth: '0.7', // cm
            weight: '0.177', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 12', 'USB-A to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 29,
        category: 'tv',
        imgUrl: 'items/apple-tv.jpeg',
        name: 'Apple TV 4K',
        display: null, // дюймы
        color: ['Black'],
        price: 179, // доллары
        chip: {
            name: 'A10X',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: null,
        audio: null,
        size: {
            height: '3.5', // cm
            width: '9.8', // cm
            depth: '3.5', // cm
            weight: '0.425', // Кг
        },
        os: 'tvOS',
        InTheBox: ['Apple TV 4K', 'Siri Remote', 'Power cord', 'Lightning to USB cable', 'Documentation'],
        orderInfo: {
        	inStock: 2, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 30,
        category: 'tv',
        imgUrl: 'items/apple-tv.jpeg',
        name: 'Apple TV 4K',
        display: null, // дюймы
        color: ['Black'],
        price: 199, // доллары
        chip: {
            name: 'A10X',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: null,
        audio: null,
        size: {
            height: '3.5', // cm
            width: '9.8', // cm
            depth: '3.5', // cm
            weight: '0.425', // Кг
        },
        os: 'tvOS',
        InTheBox: ['Apple TV 4K', 'Siri Remote', 'Power cord', 'Lightning to USB cable', 'Documentation'],
        orderInfo: {
        	inStock: 1, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 31,
        category: 'airpods',
        imgUrl: 'items/airpods.jpg',
        name: 'AirPods',
        display: null, // дюймы
        color: ['White'],
        price: 199, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '5.3', // cm
            width: '4.4', // cm
            depth: '0.2', // cm
            weight: '0.04', // Кг
        },
        os: null,
        InTheBox: ['AirPods', 'Wireless Charging Case', 'Lightning to USB-A Cable', 'Documentation'],
        orderInfo: {
        	inStock: 23, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 32,
        category: 'airpods',
        imgUrl: 'items/airpods_pro.jpg',
        name: 'AirPods Pro',
        display: null, // дюймы
        color: ['White'],
        price: 299, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4.5', // cm
            width: '6.0', // cm
            depth: '0.21', // cm
            weight: '0.04', // Кг
        },
        os: null,
        InTheBox: ['AirPods Pro', 'Wireless Charging Case', 'Lightning to USB-C Cable', 'Documentation', 'Silicone ear tips (three sizes)'],
        orderInfo: {
        	inStock: 29, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 33,
        category: 'airpods',
        imgUrl: 'items/airpods-max.jpg',
        name: 'AirPods Max',
        display: null, // дюймы
        color: ['White'],
        price: 599, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '18.7', // cm
            width: '16.8', // cm
            depth: '8.3', // cm
            weight: '0.38', // Кг
        },
        os: null,
        InTheBox: ['AirPods MAx', 'Smart Case', 'Lightning to USB-C Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 5, // процент положительных отзывов
        }
    },
];


let itemsContainer = document.getElementById("items");

let card = document.getElementById("card");


function rewrite(arr) {
    itemsContainer.innerHTML = ""; 
    let arr_add=[]
    arr.map(item=>{
    let flag=false

    for(let i=0;i<arr_add.length;i++){
        if(item.id==arr_add[i]){
            flag=true
        }
    }
    if(flag==true)return
    else arr_add.push(item.id)


    let newElement = document.createElement("div");
        newElement.classList.add("product_item")

    let card_id=card.getElementsByClassName("card_id");
    card_id[0].value=item.id


    let imgcard = card.getElementsByClassName("img_card");
        imgcard[0].src = item.imgUrl;

    let header = card.getElementsByClassName("content_product");
        header[0].textContent = item.name;
        
    let check =card.getElementsByClassName("check");
    if (item.orderInfo.inStock<=0) {
        check[0].src="img/icons/close.svg"
        check[0].style.border="none"

    }
    else{
        check[0].src="img/icons/check.svg"
        check[0].style.padding="2px"
        check[0].style.width="20px"
        check[0].style.border="#1bc943 2px solid"
        check[0].style.borderRadius="50%"
    }

        let count = card.getElementsByClassName("count_in_stock");
        count[0].textContent = item.orderInfo.inStock+" left in stock";
        count[0].innerHTML+="<br>"

        let price = card.getElementsByClassName("price")
        price[0].textContent="Price: "+item.price+"$"

        let btn = card.getElementsByClassName("btn")
        if (item.orderInfo.inStock<=0) {
            btn[0].style.backgroundColor="grey"
            btn[0].style.cursor="default"
        }
        else{
            btn[0].style.backgroundColor="#0E49B5"
            btn[0].style.cursor="pointer"
        }

        let percent = card.getElementsByClassName("percent");
        percent[0].textContent=item.orderInfo.reviews

        let order = card.getElementsByClassName("order");
        order[0].textContent= Math.trunc(Math.random()*10000)
        
        
        newElement.innerHTML = card.innerHTML;
        itemsContainer.appendChild(newElement);
    })
}
rewrite(items)
function like($this) {
    let path=$this.src.slice($this.src.indexOf("img/icons/"))
    // console.log($this.src);
    
    if (path=="img/icons/like_empty.svg") {
        $this.src = "img/icons/like.svg"
        console.log();
    }
    else{
        $this.src = "img/icons/like_empty.svg"
    }
}

function btn_filter() {
    let filter= document.getElementById("filter");

    if (filter.style.display=="none" || filter.style.display=="") {
        filter.style.display="block"
    }
    else filter.style.display="none"
}


function filter($this,i) {
    let filter=document.getElementsByClassName("filter_info")
    let img=$this.getElementsByTagName("img")

    if (filter[i].style.display=="none" || filter[i].style.display=="") {
        img[0].style.transition="all .2s linear"
        img[0].style.transform="rotate(90deg)"
        filter[i].style.display="flex"
    }
    else {
        filter[i].style.display="none"
        img[0].style.transform="rotate(0deg)"
    }
}


function search() {
    let str=document.getElementById("search").value;
    let tmp=[];
    for (let i = 0; i < items.length; i++) {
        let a= str.toLowerCase()
        let b=items[i].name.toLowerCase()
           if (b.indexOf(a)>=0) {
               tmp.push(items[i])
           }
    }
    console.log(tmp)

        rewrite(tmp)
        return tmp
}




let arr_color=[]
function color($this){
    let value=$this.value
    
    if($this.checked==true)
    {
        for (let i = 0; i < items.length; i++) {
            for(let j=0;j<items[i].color.length;j++){
                if(items[i].color[j]==value){
                    arr_color.push(items[i])
                }
            }        
        }
    }

    else 
    {
            
            let tmp_del=[]
            for (let j = 0; j < arr_color.length; j++) {
                let flag=false
                let index=arr_color[j].color.indexOf(value)
                
                for(let i = 0; i<tmp_del.length;i++){
                    if(tmp_del[i].id==arr_color[j].id)flag=true
                }

                if(index>=0 && flag==false){
                    tmp_del.push(arr_color[j])
                    arr_color.splice(j,1)
                    j--;
                }
                
            }  
        
    }
    // console.log(arr_color)
    rewrite(arr_color)
}

let arr_storage=[]
function memory($this){
    let value=$this.value
    
    if($this.checked==true)
    {
        for (let i = 0; i < items.length; i++) {
            if(items[i].storage==value){
                arr_storage.push(items[i])
            }       
        }
    }

    else 
    {
            
            let tmp_del=[]
            for (let j = 0; j < arr_storage.length; j++) {
                let flag=false

                
                for(let i = 0; i<tmp_del.length;i++){
                    if(tmp_del[i].id==arr_storage[j].id)flag=true
                }

                if(arr_storage[j].storage==value && flag==false){
                    tmp_del.push(arr_storage[j])
                    arr_storage.splice(j,1)
                    j--;
                }
                
            }  
        
    }
    rewrite(arr_storage)
}


let arr_os=[]
function os($this){
    let value=$this.value
    
    if($this.checked==true)
    {
        for (let i = 0; i < items.length; i++) {
            if(items[i].os==value){
                arr_os.push(items[i])
            }       
        }
    }

    else 
    {
            
            let tmp_del=[]
            for (let j = 0; j < arr_os.length; j++) {
                let flag=false

                
                for(let i = 0; i<tmp_del.length;i++){
                    if(tmp_del[i].id==arr_os[j].id)flag=true
                }

                if(arr_os[j].os==value && flag==false){
                    tmp_del.push(arr_os[j])
                    arr_os.splice(j,1)
                    j--;
                }
                
            }  
        
    }
    rewrite(arr_os)
}

let arr_display=[]
function display($this){
    let value=$this.value.split("-")
    
    if($this.checked==true)
    {
        for (let i = 0; i < items.length; i++) {
            if(items[i].display>=value[0] && items[i].display<value[1]){
                arr_display.push(items[i])
            }       
        }
    }

    else 
    {
            
            let tmp_del=[]
            for (let j = 0; j < arr_display.length; j++) {
                let flag=false

                
                for(let i = 0; i<tmp_del.length;i++){
                    if(tmp_del[i].id==arr_display[j].id)flag=true
                }

                if(arr_display[j].display>=value[0] && arr_display[j].display<value[1] && flag==false){
                    tmp_del.push(arr_display[j])
                    arr_display.splice(j,1)
                    j--;
                }
                
            }  
        
    }
    rewrite(arr_display)
}


let modal_window = document.getElementById("modal_window");

let modal = document.getElementById("modal");

function mw($this) {
    let id=$this.getElementsByClassName("card_id")
    id=id[0].value
    console.log(id);
    let tmp
    for (let i = 0; i < items.length; i++) {
        if (items[i].id==id) {
            tmp=items[i]
            break
        }
    }
    // modal.innerHTML = "";

    let img=modal.getElementsByClassName("modal_img");
    img[0].src = tmp.imgUrl;

    let name=modal.getElementsByClassName("middle_top");
    name[0].textContent=tmp.name;

    let text=modal.getElementsByClassName("percent");
    text[0].textContent=tmp.orderInfo.reviews;

    let order = modal.getElementsByClassName("order");
    order[0].textContent= Math.trunc(Math.random()*10000);

    let characteristic= modal.getElementsByTagName("p");
    characteristic[2].innerHTML="<span>Color: </span>"+tmp.color.join();
    characteristic[3].innerHTML="<span>Operating System: </span>"+tmp.os;
    characteristic[4].innerHTML="<span>Chip: </span>"+tmp.chip.name;
    characteristic[5].innerHTML="<span>Height: </span>"+tmp.size.height;
    characteristic[6].innerHTML="<span>Width: </span>"+tmp.size.width;
    characteristic[7].innerHTML="<span>Depth: </span>"+tmp.size.depth;
    characteristic[8].innerHTML="<span>Weight: </span>"+tmp.size.weight;


    let price=modal.getElementsByClassName("modal_price");
    price[0].textContent=tmp.price+"$";


    let stock=modal.getElementsByClassName("modal_stock");
    stock[0].innerHTML="Stock: <b>"+tmp.orderInfo.inStock+"</b> pcs";
    
    modal_window.style.display="block";
}