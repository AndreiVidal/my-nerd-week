import { characters } from '$lib/data/character-tempest'
import { error } from '@sveltejs/kit'

export function load(data) {
    const characterId = data.params.person
    
    for(let character of characters ){
        if(character.id == characterId){
            return {character}
        }
    }
    error(404, "Page not found")    
}
