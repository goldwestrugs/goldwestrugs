const rugImages = [
"0154 Kerman 12x19 1920.jpg",
"0135 Lavar 10x14 1900.jpg",
"0059 Lavar 14x22 1900.jpg",
"0047 Lavar 9x12 1920.jpg",
"0042 Lavar 9x12 1920.jpg",
"0036 Lavar 9x12 1920.jpg",
"0033 Lavar 9x12 1920.jpg",
"0160 Agra 10x13 1900.jpg",
"0159 Lavar 9x12 1920.jpg",
"0155 Meshed 7x13 1930.jpg",
"0137 Ziegler 7x13 1920.jpg",
"0134 Lavar 10x13 1890.jpg",
"0131 Saraband 12x19 1900.jpg",
"0127 Kerman 11x18 1910.jpg",
"0123 Lavar 12x15 1920.jpg",
"0109 Agra 14x20 1880.jpg",
"0098 Bakhtiari 10x13 1920.jpg",
"0093 Bibikabad 7x12 1900.jpg",
"0008 Heriz 9x12 1920.jpg",
"0062 Dabir 12x13 1900.jpg",
"0063 Tabriz 7x12 1880.jpg",
"0056 Kerman 13x19 1920.jpg",
"0026 Kerman 9x12 1920.jpg",
"0025 Yazd 9x12 1920.jpg",
"0020 Kerman 12x15 1900.jpg",
"0016 Chinese 9x12 1920.jpg",
"0009 Amritsar 9x14 1900.jpg",
"0162 Bidjar 10x13 1920.jpg",
"0148 Sarouk 9x12 1920.jpg",
"0152 Sarouk 9x12 1920.jpg",
"0149 Sarouk 9x12 1920.jpg",
"0150 Lavar 9x12 1920.jpg",
"0141 Sarouk 9x12 1920.jpg",
"0095 Tabriz 15x20 1900.jpg",
"0074 Bakhtiari 10x13 1910.jpg",
"0065 Dorokhsh 15x20 1900.jpg",
"0106 Goravan 13x18 1920.jpg",
"0018 Goravan 10x13 1930.jpg",
"0163 Bokhara 10x13 1950.jpg",
"0129 Turkmen 10x13 1930.jpg",
"0101 Tabriz 9x12 1920.jpg",
"0038 Kerman 9x12 1940.jpg",
"0161 Kerman 9x12 1940.jpg",
"0166 Kashan 9x12 1920.jpg",
"0158 Kerman 9x12 1930.jpg",
"0156 Kashan 9x12 1920.jpg",
"0157 Kerman 9x12 1930.jpg",
"0153 Sarouk 9x12 1920.jpg",
"0151 Kerman 9x12 1920.jpg",
"0147 Kerman 9x12 1930.jpg",
"0145 Sarouk 9x12 1920.jpg",
"0144 Isfahan 9x12 1950.jpg",
"0143 Sarouk 9x12 1920.jpg",
"0142 Lavar 9x12 1920.jpg",
"0140 Ghazvin 9x12 1920.jpg",
"0139 Kerman 9x12 1930.jpg",
"0138 Turkish 8x11 1920.jpg",
"0136 Ziegler 12x16 1900.jpg",
"0133 Kerman 9x12 1930.jpg",
"0121 Kerman 9x12 1940.jpg",
"0119 Bakhtiari 8x11 1920.jpg",
"0114 Tabriz 19x14  1920.jpg",
"0109 Agra 14x20 1880.jpg",
"0104 Aubusson 12x15 1880.jpg",
"0099 Bakhtiari 9x12 1940.jpg",
"0096 Mohtasham 11x12 1900.jpg",
"0097 Kerman 9x12 1930.jpg",
"0094 Kerman 13x18 1920.jpg",
"0091 Sultanabad 9x12 1900.jpg",
"0090 Bakhtiari 8x11 1920.jpg",
"0089 Lavar 7x10 1920.jpg",
"0088 Mohtasham 9x12 1900.jpg",
"0087 Chador 6x12 1920.jpg",
"0084 Kilim 12x15 1920.jpg",
"0077 Tabriz 8x11 1930.jpg",
"0076 Mahal 9x12 1920.jpg",
"0075 Indian 8x9 1900.jpg",
"0073 Tabriz 9x12 1920.jpg",
"0072 Tabriz 10x13 1920.jpg",
"0071 Dabir 9x12 1920.jpg",
"0070 Bidjar 9x12 1920.jpg",
"0067 Chinese 8x11 1930.jpg",
"0066 Chinese 9x12 1930.jpg",
"0064 Mahal 9x12 1920.jpg",
"0061 Lavar 9x12 1920.jpg",
"0060 Lavar 9x12 1920.jpg",
"0058 Kerman 9x12 1920.jpg",
"0057 Kerman 9x12 1920.jpg",
"0055 Lavar 9x12 1920.jpg",
"0053 Lavar 9x12 1920.jpg",
"0052 Kerman 9x12 1920.jpg",
"0051 Lavar 9x12 1920.jpg",
"0050 Kerman 9x12 1920.jpg",
"0049 Lavar 9x12 1920.jpg",
"0048 Lavar 9x12 1920.jpg",
"0046 Lavar 9x12 1920.jpg",
"0044 Kerman 9x12 1920.jpg",
"0043 Lavar 9x12 1920.jpg",
"0041 Lavar 9x12 1920.jpg",
"0037 Lavar 9x12 1920.jpg",
"0040 Kerman 9x12 1920.jpg",
"0039 Kashan 9x12 1920.jpg",
"0038 Kerman 9x12 1940.jpg",
"0031 Lavar 9x12 1920.jpg",
"0030 Bakhtiari 9x12 1920.jpg",
"0029 Bidjar 9x12 1920.jpg",
"0028 Mahal 9x12 1920.jpg",
"0027 Mahal 9x12 1920.jpg",
"0024 Mahal 9x12 1920.jpg",
"0023 Tabiz 9x12 1920.jpg",
"0022 Tabriz 9x12 1930.jpg",
"0021 Tabriz 9x12 1920.jpg",
"0019 Lavar 9x12 1920.jpg",
"0017 Peking 7x9 1880.jpg",
"0015 Chinese 9x12 1920.jpg",
"0014 Chinese 9x12 1920.jpg",
"0013 Chinese 9x12 1920.jpg",
"0012 Agra 7x9 1900.jpg",
"0011 Ushak 12x15 1900.jpg",
"0010 Agra 9x12 1920.jpg",
"0008 Heriz 9x12 1920.jpg",
"0007 Heriz 8x11 1920.jpg",
"0006 Heriz 7x10 1920.jpg",
"0005 Heriz 7X10 1920.jpg",
"0004 Heriz 7x10 1920.jpg",
"0003 Heriz 7x10 1920.jpg",
"0002 Agra 7x8 1900.jpg",
"0001 Heriz 9x12 1920.png",
"0069 Heriz 9x12 1920.jpg",
"0164 Heriz 8x11 1920.jpg",
"0125 Heriz 9x12 1920.jpg",
"0120 Serapi 9x12 1920.jpg",
"0118 Heriz 10x10 1920.jpg",
"0124 Heriz 9x9 1920.jpg",
"0115 Mahal 8x11 1920.jpg",
"0113 Ushak 10x13 1920.jpg",
"0111 Serapi 10x13 1920.jpg",
"0110 Serapi 10x13 1920.jpg",
"0112 Serapi 7x10 1920.jpg",
"0108 Serapi 9x12 1920.jpg",
"0107 Kharaje 9x12 1930.jpg",
"0105 Aubusson 12x12 1890.jpg",
"0103 Serapi 9x12 1900.jpg",
"0102 Turkmen 7x10 1900.jpg",
"0165 Turkmen 7x10 1920.jpg",
"0092 Goravan 8x11 1920.jpg",
"0083 Heriz 8x11 1930.jpg",
"0082 Heriz 9x10 1930.jpg",
"0080 Heriz 8x11 1930.jpg",
"0078 Kashan 8x11 1920.jpg",
"0079 Kazak 9x12 1920.jpg",
"0068 Aubusson 7x12 1900.png",
"0032 Khotan 7x14 1920.jpg",
"0132 Sivas 7x10 1920.jpg",
"0128 Heriz 9x9 1920.jpg",
"0100 Senneh 8x9 1900.jpg",
];

const gallery = document.querySelector('.gallery');

rugImages.forEach(imageName => {
    const [lotNumber, name, size, yearWithExt] = imageName.split(/[\s.]+/);
    const year = yearWithExt.replace(/\D/g, '');  // Extract year

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="Goldwestrugs Photos/${imageName}" alt="${name} ${size} ${year}" class="rug-image">
        <div class="info">
            <h2>${name}</h2>
            <p>Lot #: ${lotNumber}</p>
            <p>Origin: ${name}</p>
            <p>Size: ${size.replace('x', 'x')}</p>
            <p>Year: ${year}</p>
        </div>
    `;
    gallery.appendChild(card);
});

document.querySelectorAll('.rug-image').forEach(image => {
    image.addEventListener('click', () => {
        const expandedImg = document.createElement('div');
        expandedImg.classList.add('expanded-img');
        expandedImg.innerHTML = `
            <img src="${image.src}" alt="${image.alt}">
            <button class="close-btn">Close</button>
        `;
        document.body.appendChild(expandedImg);

        expandedImg.querySelector('.close-btn').addEventListener('click', () => {
            document.body.removeChild(expandedImg);
        });
    });
});
