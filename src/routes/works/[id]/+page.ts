import { works } from '$lib/data/works'
import { error } from '@sveltejs/kit'

export function load(data) {
    const workId = data.params.id
    
    for(let work of works){
        if(work.slug == workId){
            return {work}
        }
    }
    error(404, "Page not found")    
}
