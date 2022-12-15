$count = 0;
slides();

function slides() {
    $s = document.getElementsByClassName("slide");

    for (a = 0; a < $s.length; a++) {
        $s[a].style.display = "none";
    }

    $count++;

    if ($count > $s.length) {
        $count = 1;
    }

    $s[$count - 1].style.display = "block";
}

start = setInterval(slides, 4000)