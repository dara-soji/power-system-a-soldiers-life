//We need to add somtning elsi tobthis app
// use object factory to create humans with essence
const createHuman = (name) => {
    return {
        name,
        essence: {
            strength: [],
            power: [],
            quickness: [],
            dexterity: [],
            endurance: [],
            constitution: [],
            coordination: [],
            intellect: [],
            reasoning: [],
            perception: [],
            insight: [],
            resillience: [],
            empathy: [],
            fortitude: [],
            aether_pool: [],
            channeling: [],
            aether_shaping: [],
            aether_tolerance: [],
            aether_resistance: [],
        },
        prime_aether: '',
        minor_aether: '',
        affinities: {
            fire: 0, 
            air: 0,
            water: 0,
            earth: 0,
            lightning: 0,
            spirit: 0,
            nature: 0,
            charm: 0,
            illusion: 0,
            clairvoyance: 0,
            necromancy: 0,
            celestial: 0,
            abyssal: 0,
            space: 0,
            time: 0,
            displacement: 0,
            materialism: 0,
            worlds: 0,
            void: 0,
            convergence: 0
        }
    }
}