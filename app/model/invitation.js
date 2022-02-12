import Sequelize from 'sequelize';
import db from '../config/database.js'

const Invitation = db.define('invitation', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        defaultValue: Sequelize.literal("nextval('id_invitation_seq')")
    },
    coupleName: Sequelize.STRING,
    guestName: Sequelize.STRING,
    refNumber: Sequelize.STRING,
    url: Sequelize.STRING,
    isGiftConfirmed: Sequelize.BOOLEAN
}, {
    tableName: 'invitation',
    createdAt: false,
    updatedAt: false,
    underscored: true
});

export default Invitation;