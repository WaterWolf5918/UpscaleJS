import { readFileSync, readdirSync, lstatSync, existsSync, mkdirSync } from 'fs';
import path from 'path';
const show_root = 'D:\\Futurama\\';
const output_root = 'D:\\Futurama_Upscaled\\'
const seasons = readdirSync(show_root);
for(let i=0;i< seasons.length;i++){
    if (lstatSync(path.join(show_root,seasons[i])).isFile()){break}
    const disc = readdirSync(path.join(show_root,seasons[i]))
    for(let j=0;j<disc.length;j++){
        const episodes = readdirSync(path.join(show_root,seasons[i],disc[j]));
        if(episodes.length == 0) break
        for(let k=0;k<episodes.length;k++){
            
            console.log(path.join(show_root,seasons[i],disc[j],episodes[k]))
            console.log(path.join(output_root,seasons[i],disc[j],episodes[k]))
            if (!existsSync(path.join(output_root,seasons[i],disc[j]))){
                console.log(`[Warn] Dir Doesn't Exist Creating...`)
                mkdirSync(path.join(output_root,seasons[i],disc[j]),{recursive:true})
            }
        }
        
    }
    
}