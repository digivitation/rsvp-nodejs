CREATE SEQUENCE id_invitation_seq start 1 increment 1;
CREATE SEQUENCE id_greeting_card_seq start 1 increment 1;

CREATE TABLE "invitation" (
  "id" int PRIMARY KEY NOT NULL DEFAULT nextval('id_invitation_seq'),
  "couple_name" varchar(255) NOT NULL,
  "guest_name" varchar(255) NOT NULL,
  "ref_number" varchar(255) NOT NULL,
  "url" varchar(255) NOT NULL
);

CREATE TABLE "greeting_card" (
  "id" int PRIMARY KEY NOT NULL DEFAULT nextval('id_greeting_card_seq'),
  "guest_name" varchar(255) NOT NULL,
  "message" varchar(500) NOT NULL
);

ALTER TABLE invitation ADD COLUMN is_gift_confirmed boolean default false not null;