global WARCRY = "I bring havoc !";
global RANGE_PISTOL = 7;
global WEAPONS = [WEAPON_PISTOL, CHIP_SPARK];

// On prend le pistolet
//setWeapon(WEAPON_PISTOL); // Attention : coûte 1 PT

// On récupère l'ennemi le plus proche
var enemy = getNearestEnemy();
// On avance vers l'ennemi
moveToward(enemy);
//var weapon = hasInView(enemy) ? WEAPON_PISTOL : 
var shot_status = 1;
if (hasInView(enemy))
{
    setWeapon(WEAPON_PISTOL);
    while (shot_status >= 0)
    {
        shot_status = useWeapon(enemy);
    }
}
else
{
    while (shot_status >= 0)
    {
        shot_status = useChip(CHIP_SPARK, enemy);
    }
}

if (isDead(enemy))
	say(WARCRY);

//
function moveInRange(cell, range)
{
    return false;    
}

// get highest range among availble weapons
function bestRangeWeapon()
{
	var weapons = getWeapons();
	var best_range_weap = weapons[0];
	for (var i = 1, var c = weapons.length; i < c; i++)
	{
		if (weapons[i].getWeaponMaxScope() > best_range_weap.getWeaponMaxScope())
			best_range_weap = weapons[i];
	}
	return best_range_weap;
}

/*
 * Détermine si le poireau peut tirer sur l'ennemi d'id leek avec son arme
 * courante
 */
function canUseWeapon(leek)
{
    return enemyInRange && false;
}

function hasInView(leek)
{
    return lineOfSight(getCell(), getCell(leek));
}
