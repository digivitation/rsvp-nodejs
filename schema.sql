CREATE SEQUENCE id_invitation_seq start 1 increment 1;
CREATE SEQUENCE id_rsvp_seq start 1 increment 1;

CREATE TABLE "invitation" (
  "id" int PRIMARY KEY NOT NULL DEFAULT nextval('id_invitation_seq'),
  "name" varchar(255) NOT NULL,
  "ref_number" varchar(255) NOT NULL,
  "url" varchar(500) NOT NULL
);

CREATE TABLE "rsvp" (
  "id" int PRIMARY KEY NOT NULL DEFAULT nextval('id_rsvp_seq'),
  "name" varchar(255) NOT NULL,
  "message" varchar(500) NOT NULL
);