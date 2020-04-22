module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // Table you will add column
      'avatar_id', // Column Name
      // Column parameters
      {
        type: Sequelize.INTEGER, // Reference only the image ID
        // Creating the FK
        references: {
          model: 'files', // Table reference
          key: 'id', // FK itself.
          // This means that every 'avatar_id' in users will be an ID in files
        },
        // If something happens to the ID in files table:
        onUpdate: 'CASCADE', // If the id changes in files, it will change in users too.
        onDelete: 'SET NULL', // If the file ID is deleted, user 'avatar_id' will be set to null.
        allowNull: true,
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
