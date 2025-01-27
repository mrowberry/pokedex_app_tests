export type EntityType = "pokemon" | "item";

export type TypeToEntity = {
    pokemon: IPokemon,
    item: IItem,
}

interface IEntity {
    id: number;
    name: string;
    sprite: string;
}

export interface IItem extends IEntity {

}

export interface IPokemon extends IEntity{
    artwork: string;
    height: number;
    weight: number;
    abilities: {
        ability: {
            name: string
        };
        isHidden: boolean
    }[];
    types: {
        slot: number,
        type: {
            name: string,
            url: string
        }
    }[]
}

export enum Status {
    IDLE = 'idle',
    FETCHING = 'fetching',
    ERROR = 'error',
    SUCCESS = 'success'
}

export interface ITransformedSpecies {
    flavorTextEntries: {
        flavorText: string,
        version: {
            name: string,
        }
    }[]
}
