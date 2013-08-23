SET foreign_key_checks = 0;
CREATE TABLE  `project` (
  `project_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(83) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE  `project_skill` (
  `project_id` int(10) unsigned NOT NULL DEFAULT '0',
  `skill_id` int(10) unsigned NOT NULL DEFAULT '0',
  KEY `project_skill_project` (`project_id`),
  KEY `project_skill_skill` (`skill_id`),
  CONSTRAINT `project_skill_skill` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`skill_id`) ON UPDATE CASCADE,
  CONSTRAINT `project_skill_project` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE  `skill` (
  `skill_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(23) NOT NULL DEFAULT '',
  PRIMARY KEY (`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE  `skill_user` (
  `skill_id` int(10) unsigned NOT NULL DEFAULT '0',
  `user_id` int(10) unsigned NOT NULL DEFAULT '0',
  KEY `skill_user_skill` (`skill_id`),
  KEY `skill_user_user` (`user_id`),
  CONSTRAINT `skill_user_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE,
  CONSTRAINT `skill_user_skill` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`skill_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE  `user` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(83) NOT NULL DEFAULT '',
  `name` varchar(83) NOT NULL DEFAULT '',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET foreign_key_checks = 1;
