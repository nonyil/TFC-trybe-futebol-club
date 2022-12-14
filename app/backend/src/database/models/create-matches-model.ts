import { Model, DataTypes } from 'sequelize';
import db from '.';
import CreateTeams from './create-teams-model';

export default class CreateMatches extends Model {
  declare id: number;

  declare homeTeam: number;

  declare homeTeamGoals: number;

  declare awayTeam: number;

  declare awayTeamGoals: number;

  declare inProgress: boolean;
}

CreateMatches.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    homeTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'teams', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'teams', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'matches',
    timestamps: false,
  },
);

CreateMatches
  .belongsTo(CreateTeams, { foreignKey: 'homeTeam', as: 'teamHome' });

CreateMatches
  .belongsTo(CreateTeams, { foreignKey: 'awayTeam', as: 'teamAway' });

CreateTeams
  .hasMany(CreateMatches, { foreignKey: 'homeTeam', as: 'teamHome' });

CreateTeams
  .hasMany(CreateMatches, { foreignKey: 'awayTeam', as: 'teamAway' });

CreateTeams
  .hasMany(CreateMatches, { foreignKey: 'homeTeam', as: 'homeMatches' });

CreateTeams
  .hasMany(CreateMatches, { foreignKey: 'awayTeam', as: 'awayMatches' });
