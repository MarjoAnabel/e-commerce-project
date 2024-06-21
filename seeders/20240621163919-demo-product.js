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
          id_category: '1',
        },
        {
          name: 'Nike Air Force 1',
          description: 'La amortiguación Nike Air diseñada originalmente para el baloncesto proporciona comodidad y ligereza durante todo el día.',
          price: '119',
          stock: '100',
          id_category: '1',
        },
        {
          name: 'Samba Originals',
          description: 'Este icono del estilo urbano se mantiene fiel a su legado dentro y fuera del terreno de juego.',
          price: '120',
          stock: '1',
          id_category: '2',
        },
        {
          name: 'Superstar Originals',
          description: 'La clásica Superstar cambió las reglas del juego en cuanto salió de las canchas.',
          price: '80',
          stock: '100',
          id_category: '2',
        },
        {
          name: 'Suede Classic',
          description: 'Las Suede debutaron en 1968 y llevan desde entonces cambiando las reglas del juego. Las han llevado iconos de todas las generaciones y nunca han dejado de ser clásicas. El legado inconfundible y en constante transformación de las Suede sigue creciendo y conquistando a las personas más auténticas y expresivas que son fieles a este icónico calzado. Esta versión presenta una base de ante con la formstrip de PUMA de piel.',
          price: '90',
          stock: '100',
          id_category: '3',
        },
        {
          name: '530',
          description: 'La zapatilla 530 supone el regreso de una de nuestras zapatillas de running clásicas. Esta zapatilla informal aúna un estilo informal con la última tecnología. La amortiguación ABZORB debajo del pie te ofrece una comodidad superior.',
          price: '120',
          stock: '100',
          id_category: '4',
        },
        {
          name: 'Classic Leather',
          description: 'El diseño limpio y minimalista mantiene tu look siempre fresco. Considera estas zapatillas Classic Leather de Reebok tu lienzo en blanco para el estilo. Las líneas nítidas y los colores sólidos hacen que sea fácil combinarlas con cualquier cosa. Además, una entresuela acolchada y un forro suave añaden comodidad sin parar.',
          price: '90',
          stock: '100',
          id_category: '5',
        },
        {
          name: 'OLD SKOOL',
          description: 'Conocidas inicialmente como las Vans n.º 36, las zapatillas Old Skool hicieron su debut en 1977 con un nuevo detalle excepcional: un garabato dibujado al azar por el fundador Paul Van Doren, que se denominó la «jazz stripe» (raya de jazz). Hoy, la famosa banda lateral de Vans se ha convertido en la inconfundible y reconocible seña de identidad de la marca. Las Old Skool, dotadas de unas resistentes palas de lona y ante en una gama de colores frescos, rinden homenaje a nuestro legado y garantizan que estas zapatillas de caña baja y con cordones sigan siendo tan emblemáticas como siempre. También incluyen puntera reforzada, cuello acolchado para una mayor sujeción y la distintiva suela reticular de caucho.',
          price: '80',
          stock: '100',
          id_category: '6',
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
  }
};
