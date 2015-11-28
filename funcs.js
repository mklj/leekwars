// get highest range among available weapons
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

