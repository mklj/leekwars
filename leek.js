global WARCRY = "I bring havoc !";

if (! getWeapon())
    setWeapon(WEAPON_SHOTGUN);
// On récupère l'ennemi le plus proche
var enemy = getNearestEnemy();
// On avance vers l'ennemi
moveToward(enemy);

var shot_status = 1;
if (lineOfSight(getCell(), getCell(enemy)))
{
    fireWeapon(enemy);
}
else
{
    fireSpark(enemy);
}

if (isDead(enemy))
	say(WARCRY);

//
function fireWeapon(enemy)
{
    var enemyCell = getCell(enemy);
    var myCell = getCell();
    var distance = getDistance(enemyCell, myCell);

    if (distance <= getWeaponMaxRange(WEAPON_SHOTGUN) && isOnSameLine(enemyCell, myCell))
    {
        if (! getWeapon())
            setWeapon(WEAPON_SHOTGUN);
    }
    else if (distance <= getWeaponMaxRange(WEAPON_PISTOL))
    {
        setWeapon(WEAPON_PISTOL);
    }

    var shot_status = 1;
    while (shot_status >= 0)
    {
        shot_status = useWeapon(enemy);
    }
}

function fireSpark(enemy)
{
    var shot_status = 1;
    while (shot_status >= 0)
    {
        shot_status = useChip(CHIP_SPARK, enemy);
    }
}

