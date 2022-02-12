import Sequelize from 'sequelize';
import db from '../config/database.js'

const GreetingCard = db.define('greeting_card', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        defaultValue: Sequelize.literal("nextval('id_greeting_card_seq')")
    },
    guest_name: Sequelize.STRING,
    message: Sequelize.STRING
}, {
    tableName: 'greeting_card',
    createdAt: false,
    updatedAt: false,
    underscored: true
});

export default GreetingCard;