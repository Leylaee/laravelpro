<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <p>Beste, admin</p>

        <p>Je hebt een nieuw bericht ontvangen via het contactformulier op de website. Hieronder vind je de details:
        </p>

        <div>
            <b>Naam afzender:</b>
            <span>{{ $data['name'] }}</span>
        </div>

        <div>
            <b>Email:</b>
            <span>{{ $data['email'] }}</span>
        </div>

        <div>
            <b>Bericht:</b>
            <span>{{ $data['message'] }}</span>
        </div>



        <div>
            <p>Vriendelijke Groeten,</p>
            <p>Studio katan</p>
        </div>
    </div>
</body>

</html>