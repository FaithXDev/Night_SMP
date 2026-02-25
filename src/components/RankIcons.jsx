// Rank icon components using actual rank images from assets/Ranks/

import vipImg from '../assets/Ranks/vip.png';
import mvpImg from '../assets/Ranks/mvp.png';
import eliteImg from '../assets/Ranks/elite.png';
import immortalImg from '../assets/Ranks/immortal.png';
import deadliestImg from '../assets/Ranks/deadliest.png';
import customRankImg from '../assets/Ranks/custom.png';

const rankIconStyle = {
    width: '160px',
    height: '160px',
    objectFit: 'contain',
    display: 'block',
};

export function VipIcon() {
    return <img src={vipImg} alt="VIP Rank" style={rankIconStyle} />;
}

export function MvpIcon() {
    return <img src={mvpImg} alt="MVP Rank" style={rankIconStyle} />;
}

export function EliteIcon() {
    return <img src={eliteImg} alt="Elite Rank" style={rankIconStyle} />;
}

export function ImmortalIcon() {
    return <img src={immortalImg} alt="Immortal Rank" style={rankIconStyle} />;
}

export function DeadliestIcon() {
    return <img src={deadliestImg} alt="Deadliest Rank" style={rankIconStyle} />;
}

export function CustomRankIcon() {
    return <img src={customRankImg} alt="Custom Rank" style={rankIconStyle} />;
}
