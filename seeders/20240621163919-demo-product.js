'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Products', [
        {
          name: 'Shox TL',
          description: 'Las Nike Shox originales, con una amortiguación mecánica de siguiente nivel. Esta versión mantiene vivo el legado con unas columnas flexibles y resistentes, y unas placas moderadoras que aumentan la fuerza y absorben los impactos.',
          price: '169',
          stock: '100',
          CategoryId: '1',
          images: JSON.stringify([
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725700190/e-commerce/kshtcsquoiwgkiylh2hu.jpg',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725700190/e-commerce/s0fgsxcuoy76eth1hpwp.jpg',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725700190/e-commerce/x53oy3vxfilxcnqf1wjl.jpg',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725700190/e-commerce/d0y6x9bkgxbbovqeoxiu.webp',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725700189/e-commerce/k2mh6jkcg1ak4iuii7e9.webp',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725700189/e-commerce/lgikhitoextabhiqnnab.webp'
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nike Air Force 1',
          description: 'La amortiguación Nike Air diseñada originalmente para el baloncesto proporciona comodidad y ligereza durante todo el día.',
          price: '119',
          stock: '100',
          CategoryId: '1',
          images: JSON.stringify([
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725795396/e-commerce/Nike%20Air%20Force%201/wdmhtlcvl82wo0feqtyo.webp',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725795395/e-commerce/Nike%20Air%20Force%201/bbf0oxn9wqmwbx5ew6tp.webp',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725795395/e-commerce/Nike%20Air%20Force%201/o2sgxfa2ibeyuwet7wue.webp',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725795395/e-commerce/Nike%20Air%20Force%201/q0jfa6w0zpz0peqxkitu.webp',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725795395/e-commerce/Nike%20Air%20Force%201/g9wo7afjpxzbgqi1zxzg.webp',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725795395/e-commerce/Nike%20Air%20Force%201/apmejtulb5pwcb36gtjr.webp'
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Samba Originals',
          description: 'Este icono del estilo urbano se mantiene fiel a su legado dentro y fuera del terreno de juego.',
          price: '120',
          stock: '1',
          CategoryId: '2',
          images: JSON.stringify([
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725883419/e-commerce/Samba%20Originals/v3nuibwo6yjgs0jaodwb.jpg',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725883418/e-commerce/Samba%20Originals/duqi2y2sunqjrb2rfynd.jpg',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725883419/e-commerce/Samba%20Originals/tvdobqzhcqmtbkiiatro.jpg',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725883418/e-commerce/Samba%20Originals/xarwm2b5tmkfkanx0ybb.jpg',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725883419/e-commerce/Samba%20Originals/ooek4pucirpisajccjvj.jpg',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725883418/e-commerce/Samba%20Originals/ui40od2rsrqtxrqx6l9w.jpg'
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Superstar Originals',
          description: 'La clásica Superstar cambió las reglas del juego en cuanto salió de las canchas.',
          price: '80',
          stock: '100',
          CategoryId: '2',
          images: JSON.stringify([
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725884635/e-commerce/Superstar%20Originals/bp2ogcxnmqf8uf5pk27i.png',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725884635/e-commerce/Superstar%20Originals/gx9zljhfpzymuc8jnfxd.png',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725884635/e-commerce/Superstar%20Originals/ej00tthvd2d0zewt3kq2.png',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725884635/e-commerce/Superstar%20Originals/x25esulebvoeiwjeqjot.png',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725884635/e-commerce/Superstar%20Originals/qdx1mmrnozzkhmrl7twd.png',
            'https://res.cloudinary.com/dtgu0boi0/image/upload/v1725884636/e-commerce/Superstar%20Originals/snhxuttpccau19td5xxm.png'
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Suede Classic',
          description: 'Las Suede debutaron en 1968 y llevan desde entonces cambiando las reglas del juego. Las han llevado iconos de todas las generaciones y nunca han dejado de ser clásicas. Esta versión presenta una base de ante con la formstrip de PUMA de piel.',
          price: '90',
          stock: '100',
          CategoryId: '3',
          images: JSON.stringify([
            '',
            '',
            '',
            '',
            '',
            ''
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '530',
          description: 'La zapatilla 530 supone el regreso de una de nuestras zapatillas de running clásicas. Esta zapatilla informal aúna un estilo informal con la última tecnología. La amortiguación ABZORB debajo del pie te ofrece una comodidad superior.',
          price: '120',
          stock: '100',
          CategoryId: '4',
          images: JSON.stringify([
            '',
            '',
            '',
            '',
            '',
            ''
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Classic Leather',
          description: 'El diseño limpio y minimalista mantiene tu look siempre fresco. Considera estas zapatillas Classic Leather de Reebok tu lienzo en blanco para el estilo.  Además, una entresuela acolchada y un forro suave añaden comodidad sin parar.',
          price: '90',
          stock: '100',
          CategoryId: '5',
          images: JSON.stringify([
            '',
            '',
            '',
            '',
            '',
            ''
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'OLD SKOOL',
          description: 'Las Old Skool, dotadas de unas resistentes palas de lona y ante en una gama de colores frescos, rinden homenaje a nuestro legado y garantizan que estas zapatillas de caña baja y con cordones sigan siendo tan emblemáticas como siempre.',
          price: '80',
          stock: '100',
          CategoryId: '6',
          images: JSON.stringify([
            '',
            '',
            '',
            '',
            '',
            ''
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Products', null, {});
  }
};
