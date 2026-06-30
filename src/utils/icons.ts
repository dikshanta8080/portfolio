import type { IconType } from 'react-icons';
import {
  FaGithub,
  FaJava,
  FaLinkedin,
  FaDocker,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiApachekafka,
  SiApachemaven,
  SiGithub,
  SiGradle,
  SiHibernate,
  SiIntellijidea,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiSpring,
  SiSwagger,
  SiTypescript,
} from 'react-icons/si';
import { TbShieldLock } from 'react-icons/tb';

const iconMap: Record<string, IconType> = {
  SiJava: FaJava,
  SiSpringboot: SiSpring,
  SiSpringsecurity: TbShieldLock,
  SiHibernate: SiHibernate,
  SiGradle: SiGradle,
  SiApachemaven: SiApachemaven,
  SiApachekafka: SiApachekafka,
  SiPostgresql: SiPostgresql,
  SiMysql: SiMysql,
  SiMongodb: SiMongodb,
  SiRedis: SiRedis,
  SiDocker: FaDocker,
  SiGit: FaGitAlt,
  SiGithub: SiGithub,
  SiPostman: SiPostman,
  SiSwagger: SiSwagger,
  SiIntellijidea: SiIntellijidea,
  SiTypescript: SiTypescript,
  SiLinux: SiLinux,
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
};

export function getSkillIcon(name: string): IconType {
  return iconMap[name] ?? FaDatabase;
}

/** @deprecated Use getSkillIcon for skills section */
export function getIcon(name: string): IconType {
  return getSkillIcon(name);
}
