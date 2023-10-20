export async function getCoches() {
  let datosEncoded = [
    {
      "id": 1,
      "nombre": "Toyota Camry",
      "precio": 28000,
      "imagen": "https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/camry/xse/2548/2pt/36/5.png?fm=png&w=930&q=90"
    },
    {
      "id": 2,
      "nombre": "Honda Civic",
      "precio": 24000,
      "imagen": "https://www.autofacil.es/wp-content/uploads/2021/05/honda_civic_2022-1.png"
    },
    {
      "id": 3,
      "nombre": "Ford Mustang",
      "precio": 38000,
      "imagen": "https://images.jazelc.com/uploads/galpin/2022-Ford-Mustang-3.png"
    },
    {
      "id": 4,
      "nombre": "Chevrolet Silverado",
      "precio": 42000,
      "imagen": "https://www.chevrolet.com.pe/content/dam/chevrolet/south-america/peru/espanol/index/pickups-and-trucks/2023-silverado/01-images/colorizer/02-images/silverado-z71-trailboss-negro.png?imwidth=960"
    },
    {
      "id": 5,
      "nombre": "Nissan Altima",
      "precio": 26000,
      "imagen": "https://di-uploads-pod26.dealerinspire.com/southlakenissan/uploads/2021/12/22Nissan-Altima-SR-SunsetDrift-Jellybean.png"
    },
    {
      "id": 6,
      "nombre": "Hyundai Sonata",
      "precio": 27000,
      "imagen": "https://www.autolist.com/izmo-photos/2019/19hyundai/19hyundaisonatasesd7fa/hyundai_19sonatasesd7fa_angularfront.png"
    },
    {
      "id": 7,
      "nombre": "Volkswagen Golf",
      "precio": 32000,
      "imagen": "https://fotos.estaticosmf.com/fotos/00/04/23/25/95/1/9077152.jpg"
    },
    {
      "id": 8,
      "nombre": "Subaru Outback",
      "precio": 35000,
      "imagen": "https://www.subaru.cr/media/cache/hero_bg_small/uploads/gallery/90a41bfd1b50953d8df477123f115cd7cb5de846.png"
    },
    {
      "id": 9,
      "nombre": "Mazda CX-5",
      "precio": 29000,
      "imagen": "https://media-assets.mazda.eu/image/upload/q_auto,f_auto/mazdaes/globalassets/cars/2023-mazda-cx-5/clearcuts/mme_cx5_kdpweaj_48t_7-8.png?rnd=495be4"
    },
    {
      "id": 10,
      "nombre": "Kia Sportage",
      "precio": 25000,
      "imagen": "https://www.motortrend.com/uploads/sites/10/2019/12/2020-kia-sportage-lx-suv-angular-front.png?fit=around%7C551:374"
    },
    {
      "id": 11,
      "nombre": "Audi A4",
      "precio": 42000,
      "imagen": "https://fotos.estaticosmf.com/fotos_jato/imagenes/Marca_Modelo_Carroceria_Pintura/g/AUDI_A4_ES_6Y6Y_F.png"
    },
    {
      "id": 12,
      "nombre": "BMW X3",
      "precio": 48000,
      "imagen": "https://images.proaocasion.com/models/32.png?t=1594310384524"
    },
    {
      "id": 13,
      "nombre": "Lexus ES",
      "precio": 44000,
      "imagen": "https://www.lexusofmelbourne.com/static/brand-lexus/vehicle/2022/ES/2022-ES-250-F-SPORT-AWD.png"
    },
    {
      "id": 14,
      "nombre": "Mercedes-Benz C-Class",
      "precio": 52000,
      "imagen": "https://www.greenncap.com/wp-content/uploads/mercedes-benz-c-class-2023-0126.png"
    },
    {
      "id": 15,
      "nombre": "Porsche 911",
      "precio": 90000,
      "imagen": "https://jancars.com/wp-content/uploads/2023/01/Porsche-911-GT3-1-jancars-alquiler-porsche.png"
    }
  ]  
  

  let response = await datosEncoded;
    return response;
}
