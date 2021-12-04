import Sequelize from 'sequelize';
import db from '../config/database.js'

const Invitation = db.define('invitation', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        defaultValue: "nextval('id_invitation_seq')"
    },
    name: Sequelize.STRING,
    ref_number: Sequelize.STRING,
    url: Sequelize.STRING
}, {
    tableName: 'invitation',
    createdAt: false,
    updatedAt: false
});

export default Invitation;