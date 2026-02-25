

// Kit images from assets
import vipKitImg from '../assets/Kits/vip_kit.png';
import mvpKitImg from '../assets/Kits/mvp_kit.png';
import eliteKitImg from '../assets/Kits/elite_kit.png';
import immortalKitImg from '../assets/Kits/immortal_kit.png';
import bossKitImg from '../assets/Kits/boss_kit.png';

// Rank images from assets
import vipRankImg from '../assets/Ranks/vip.png';
import mvpRankImg from '../assets/Ranks/mvp.png';
import eliteRankImg from '../assets/Ranks/elite.png';
import immortalRankImg from '../assets/Ranks/immortal.png';
import deadliestRankImg from '../assets/Ranks/deadliest.png';
import customRankImg from '../assets/Ranks/custom.png';

import deadliestKitImg from '../assets/Kits/deadliest_kit.png';

// Crate images from assets
import soulCrateImg from '../assets/Crates/soul_crate.png';
import legendaryCrateImg from '../assets/Crates/Legendary_crate.png';
import deadliestCrateImg from '../assets/Crates/deadliest_crate.png';
import mythicCrateImg from '../assets/Crates/mythic_crate.png';

// Coin images from assets
import coins200Img from '../assets/Coins/200_coins.png';
import coins400Img from '../assets/Coins/400_coins.png';
import coins1000Img from '../assets/Coins/1000_coins.png';
import coins2000Img from '../assets/Coins/2000_coins.png';
import coins4000Img from '../assets/Coins/4000_coins.png';

export const products = [
    // ===== RANKS =====
    {
        id: 'rank-vip',
        name: 'VIP Rank',
        price: 49,
        description: 'The essential starter rank. 2x Lifesteal XP & Basic Commands.',
        category: 'rank',
        image: vipRankImg,
    },
    {
        id: 'rank-mvp',
        name: 'MVP Rank',
        price: 99,
        description: 'Step up your game. More homes, more storage, and utility commands.',
        category: 'rank',
        image: mvpRankImg,
    },
    {
        id: 'rank-elite',
        name: 'ELITE Rank',
        price: 149,
        description: 'Advanced utility with Enderchest and Invsee access.',
        category: 'rank',
        image: eliteRankImg,
    },
    {
        id: 'rank-immortal',
        name: 'IMMORTAL Rank',
        price: 249,
        description: 'Control your environment with PTime and PWeather.',
        category: 'rank',
        image: immortalRankImg,
    },
    {
        id: 'rank-deadliest',
        name: 'DEADLIEST Rank',
        price: 299,
        description: 'The ultimate rank. 3x XP, /heal, and maximum limits.',
        category: 'rank',
        image: deadliestRankImg,
    },
    // ===== CRATES =====
    {
        id: 'crate-soul',
        name: 'Soul Crate',
        price: 79,
        description: 'Harness the power of souls. Contains enchanted gear, XP bottles, and soul-bound tools.',
        category: 'crate',
        image: soulCrateImg,
    },
    {
        id: 'crate-legendary',
        name: 'Legendary Crate',
        price: 149,
        description: 'Legendary loot awaits. High chance for god apples, netherite gear, and rare enchantments.',
        category: 'crate',
        image: legendaryCrateImg,
    },
    {
        id: 'crate-deadliest',
        name: 'Deadliest Crate',
        price: 249,
        description: 'Only the bravest dare open. Maxed netherite sets, totems, and deadly custom weapons.',
        category: 'crate',
        image: deadliestCrateImg,
    },
    {
        id: 'crate-mythic',
        name: 'Mythic Crate',
        price: 399,
        description: 'The rarest crate in existence. Guaranteed mythic-tier loot, exclusive items, and server-best gear.',
        category: 'crate',
        image: mythicCrateImg,
    },
    // ===== COINS =====
    {
        id: 'coins-200',
        name: '200 Coins',
        price: 10,
        description: '150 Coins + 50 Bonus!',
        category: 'coin',
        image: coins200Img,
    },
    {
        id: 'coins-400',
        name: '400 Coins',
        price: 20,
        description: '300 Coins + 100 Bonus!',
        category: 'coin',
        image: coins400Img,
    },
    {
        id: 'coins-1000',
        name: '1000 Coins',
        price: 50,
        description: '750 Coins + 250 Bonus!',
        category: 'coin',
        image: coins1000Img,
    },
    {
        id: 'coins-2000',
        name: '2000 Coins',
        price: 100,
        description: '1500 Coins + 500 Bonus!',
        category: 'coin',
        image: coins2000Img,
    },
    {
        id: 'coins-4000',
        name: '4000 Coins',
        price: 200,
        description: '3000 Coins + 1000 Bonus!',
        category: 'coin',
        image: coins4000Img,
    },
    // ===== KITS =====
    {
        id: 'kit-vip',
        name: 'KIT VIP',
        price: 29,
        description: 'Vip kit: Basic Diamond tools + Vip food.',
        category: 'kit',
        image: vipKitImg,
    },
    {
        id: 'kit-mvp',
        name: 'KIT MVP',
        price: 49,
        description: 'Mvp gear: Better tools + more consumables.',
        category: 'kit',
        image: mvpKitImg,
    },
    {
        id: 'kit-elite',
        name: 'KIT ELITE',
        price: 79,
        description: 'Netherite basic items: Good cpvp kit.',
        category: 'kit',
        image: eliteKitImg,
    },
    {
        id: 'kit-immortal',
        name: 'KIT IMMORTAL',
        price: 119,
        description: 'Enchanted netherite gear: Ender pearls + healing items.',
        category: 'kit',
        image: immortalKitImg,
    },
    {
        id: 'kit-deadliest',
        name: 'KIT DEADLIEST',
        price: 159,
        description: 'High enchanted items: Golden apples + strong tools.',
        category: 'kit',
        image: deadliestKitImg,
    },
    {
        id: 'kit-boss',
        name: 'KIT BOSS',
        price: 249,
        description: 'Best kit on the server: Top enchants + totem + pearls.',
        category: 'kit',
        image: bossKitImg,
    },
    // ===== SPECIAL =====
    {
        id: 'rank-custom',
        name: 'Custom Rank',
        price: 349,
        description: 'The Customizable rank. 3x XP, /heal, and maximum limits.',
        category: 'rank',
        image: customRankImg,
    },
];
