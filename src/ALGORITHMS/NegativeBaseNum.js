function toNegativeBase(num, base) {
    var $no = num;
    var $digits = [];
    var $base = float2int(base);
    while ($no != 0) {
        var $temp_no = $no;
        $no = float2int($temp_no / $base);
        var $remainder = ($temp_no % $base);
        $remainder = $remainder === 0 ? 0 : $remainder; //fix for -0

        if ($remainder < 0) {
            $remainder += Math.abs($base);
            $no++;
        }
        $digits.unshift($remainder);
    }

    return $digits;
}

function float2int(value) {
    return value | 0;
}


console.log(toNegativeBase(-8, -3))