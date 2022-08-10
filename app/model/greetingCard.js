import Sequelize from 'sequelize';
import db from '../config/database.js'

const GreetingCard = db.define('greeting_card', {
    id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal("nextval('id_greeting_card_seq')")
    },
    refNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    guestName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'greeting_card',
    createdAt: false,
    updatedAt: false,
    underscored: true
});

export default GreetingCard;