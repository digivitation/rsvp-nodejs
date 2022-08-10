import Sequelize from 'sequelize';
import db from '../config/database.js'

const Invitation = db.define('invitation', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        defaultValue: Sequelize.literal("nextval('id_invitation_seq')")
    },
    coupleName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    guestName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    refNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isGiftConfirmed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'invitation',
    createdAt: false,
    updatedAt: false,
    underscored: true
});

export default Invitation;