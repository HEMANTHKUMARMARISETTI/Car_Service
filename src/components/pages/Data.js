const jsonData = {
  "brands": [
    {
      "name": "Toyota",
      "cars": [
        {
          "model": "Camry",
          "year": 2022,
          "color": "Silver",
          "price": 25000,
          "image": "https://th.bing.com/th/id/R.ee3a8eb625b80e8a339ba413b6083356?rik=Tk7MxZN4EZNSRg&riu=http%3a%2f%2fwww.tflcar.com%2fwp-content%2fuploads%2f2017%2f06%2f2018-toyota-camry-se-hybrid.jpg&ehk=A1YTlinm5s08%2fAMXpOGFH6qUU8UmgruHhJBE1q6svlc%3d&risl=&pid=ImgRaw&r=0",
          "dailyPrice": 50,
          "monthlyPrice": 1200
        },
        {
          "model": "Corolla",
          "year": 2022,
          "color": "White",
          "price": 22000,
          "image": "https://th.bing.com/th/id/R.83a769fe9325d61867dbe10a24b71b78?rik=lZRh2Ui0Hw%2bzYA&riu=http%3a%2f%2fwww.thedetroitbureau.com%2fwp-content%2fuploads%2f2017%2f08%2f2017-Toyota-Corolla-iM.jpg&ehk=sgIypt7IrxkGL4ltHmGn8FWkLF8aH9bs2GAO1Wr2kzg%3d&risl=&pid=ImgRaw&r=0",
          "dailyPrice": 45,
          "monthlyPrice": 1100
        },
        {
          "model": "Rav4",
          "year": 2022,
          "color": "Blue",
          "price": 28000,
          "image": "https://th.bing.com/th/id/OIP.Wl4N-VhJDDdMhZzZAkefOgHaE8?pid=ImgDet&rs=1",
          "dailyPrice": 60,
          "monthlyPrice": 1400
        },
        {
          "model": "C Hybrid",
          "year": 2023,
          "color": "Green",
          "price": 27000,
          "image": "https://th.bing.com/th/id/OIP.JonEllL9EL4FYeF-YAlqVQHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "dailyPrice": 55,
          "monthlyPrice": 1300
        },
        {
          "model": "Highlander",
          "year": 2023,
          "color": "Gray",
          "price": 35000,
          "image": "https://th.bing.com/th/id/OIP.cbiFfUlhb0yyBjdMXA2c5wHaE8?pid=ImgDet&rs=1",
          "dailyPrice": 70,
          "monthlyPrice": 1600
        }
      ]
    },
    {
      "name": "BMW",
      "cars": [
        {
          "model": "X5",
          "year": 2023,
          "color": "Black",
          "price": 55000,
          "image": "https://th.bing.com/th/id/OIP.HiDR7SUY5Y2pfVZ0UVb3QwHaE7?pid=ImgDet&rs=1",
          "dailyPrice": 80,
          "monthlyPrice": 1900
        },
        {
          "model": "3 Series",
          "year": 2023,
          "color": "Red",
          "price": 48000,
          "image": "https://mediacloud.carbuyer.co.uk/image/private/s--hZkf71Yq--/v1579631359/carbuyer/2018/10/p90323664_highres.jpg",
          "dailyPrice": 75,
          "monthlyPrice": 1800
        },
        {
          "model": "7 Series",
          "year": 2023,
          "color": "Silver",
          "price": 75000,
          "image": "https://th.bing.com/th/id/OIP.kmsGV41sModoZpLD_OJ0UwHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "dailyPrice": 100,
          "monthlyPrice": 2500
        },
        {
          "model": "X3",
          "year": 2022,
          "color": "Blue",
          "price": 45000,
          "image": "https://th.bing.com/th/id/OIP.uH9mJkpEwVwU47WJZW43cgHaEo?pid=ImgDet&rs=1",
          "dailyPrice": 70,
          "monthlyPrice": 1600
        },
        {
          "model": "5 Series",
          "year": 2022,
          "color": "White",
          "price": 52000,
          "image": "https://th.bing.com/th/id/OIP.-CMqgNxb-fVZFkx-acQhYAHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "dailyPrice": 75,
          "monthlyPrice": 1800
        }
      ]
    },
    {
      "name": "Rolls-Royce",
      "cars": [
        {
          "model": "Phantom",
          "year": 2023,
          "color": "Silver",
          "price": 500000,
          "image": "https://th.bing.com/th/id/OIP.Ue4_mUek5uzrhQilxMzXPQHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "dailyPrice": 1000,
          "monthlyPrice": 30000
        },
        {
          "model": "Cullinan",
          "year": 2022,
          "color": "Black",
          "price": 550000,
          "image": "https://th.bing.com/th/id/OIP.mQuj3XZmu1SPKocaOTKz4wHaFj?pid=ImgDet&rs=1",
          "dailyPrice": 1100,
          "monthlyPrice": 33000
        },
        {
          "model": "Ghost",
          "year": 2023,
          "color": "White",
          "price": 450000,
          "image": "https://th.bing.com/th/id/OIP._n4DWgVoghS8G5foSi22UgHaFj?pid=ImgDet&rs=1",
          "dailyPrice": 950,
          "monthlyPrice": 29000
        },
        {
          "model": "Wraith",
          "year": 2022,
          "color": "Red",
          "price": 480000,
          "image": "https://th.bing.com/th/id/OIP.yBViV43mYRxl5B83Y5e1GAHaE7?pid=ImgDet&rs=1",
          "dailyPrice": 1000,
          "monthlyPrice": 30000
        },
        {
          "model": "Dawn",
          "year": 2022,
          "color": "Blue",
          "price": 520000,
          "image": "https://s1.cdn.autoevolution.com/images/reviews/gallery/2016-rolls-royce-dawn-review_51.jpg",
          "dailyPrice": 1050,
          "monthlyPrice": 31000
        }
      ]
    },
    {
      "name": "Audi",
      "cars": [
        {
          "model": "A4",
          "year": 2022,
          "color": "Black",
          "price": 42000,
          "image": "https://th.bing.com/th/id/OIP.tkxqH_b-VqP-Ky2BDnxuCwHaD8?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "dailyPrice": 65,
          "monthlyPrice": 1500
        },
        {
          "model": "Q5",
          "year": 2022,
          "color": "White",
          "price": 48000,
          "image": "https://i1.wp.com/practicalmotoring.com.au/wp-content/uploads/2020/09/New-Audi-Q5-Sportback-2020-8.jpg?fit=2520%2C1420&ssl=1",
          "dailyPrice": 70,
          "monthlyPrice": 1600
        },
        {
          "model": "A6",
          "year": 2023,
          "color": "Silver",
          "price": 55000,
          "image": "https://th.bing.com/th/id/OIP.JiRH-IdXw_p6Fvz_4FaBCgHaE9?pid=ImgDet&rs=1",
          "dailyPrice": 80,
          "monthlyPrice": 1900
        },
        {
          "model": "Q7",
          "year": 2023,
          "color": "Blue",
          "price": 60000,
          "image": "https://th.bing.com/th/id/R.dafef713162f39aef4e64a7cc033ee0c?rik=3u6QMmUJzf8LaQ&riu=http%3a%2f%2fwww.dieselstation.com%2fwallpapers%2falbums%2fAudi%2fQ7-2016%2fAudi-Q7-2016-widescreen-06.jpg&ehk=s2Pn8gSQm%2fxDt3B9kU01kgJM4Uaf%2f3izHb1Q20m8nj8%3d&risl=&pid=ImgRaw&r=0",
          "dailyPrice": 90,
          "monthlyPrice": 2100
        },
        {
          "model": "TT",
          "year": 2022,
          "color": "Red",
          "price": 45000,
          "image": "https://th.bing.com/th/id/OIP.Ws_iqCqq3xl5SrhcjWg62AHaEo?pid=ImgDet&rs=1",
          "dailyPrice": 70,
          "monthlyPrice": 1600
        }
      ]
    },
    {
      "name": "Tata",
      "cars": [
        {
          "model": "Nano",
          "year": 2022,
          "color": "Yellow",
          "price": 10000,
          "image": "https://images.carandbike.com/car-images/large/tata/nano/tata-nano.jpg?v=8",
          "dailyPrice": 25,
          "monthlyPrice": 600
        },
        {
          "model": "Tiago",
          "year": 2023,
          "color": "Red",
          "price": 15000,
          "image": "https://th.bing.com/th/id/OIP.h38KAD1XMVTQQYBJHd4luAHaEK?pid=ImgDet&rs=1",
          "dailyPrice": 35,
          "monthlyPrice": 800
        },
        {
          "model": "Nexon",
          "year": 2022,
          "color": "Blue",
          "price": 18000,
          "image": "https://th.bing.com/th/id/OIP.4uZz2R-e29eMqa0eHDpERQHaEK?pid=ImgDet&rs=1",
          "dailyPrice": 40,
          "monthlyPrice": 950
        },
        {
          "model": "Harrier",
          "year": 2023,
          "color": "Gray",
          "price": 22000,
          "image": "https://th.bing.com/th/id/OIP.gwCVmD7dOe6_jU55q1ARpgHaFj?pid=ImgDet&rs=1",
          "dailyPrice": 45,
          "monthlyPrice": 1100
        },
        {
          "model": "Safari",
          "year": 2022,
          "color": "White",
          "price": 25000,
          "image": "https://th.bing.com/th/id/OIP.pRC5JqH1tmf0jNR4mV0fnAHaEK?pid=ImgDet&rs=1",
          "dailyPrice": 50,
          "monthlyPrice": 1200
        }
      ]
    }
  ]
}


export default jsonData;
