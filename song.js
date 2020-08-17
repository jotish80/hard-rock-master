 
            const searchSong = document.getElementById('song-name');

           document.getElementById('search').addEventListener('click', function(){
            const inputSong = document.getElementById('song-name').value;
            fetch(`https://api.lyrics.ovh/suggest/`+searchSong.value)
            .then(res => res.json())
            .then(data => {
            // first song 
                const getSong = data['data']['0']['artist'].name;
                 document.getElementById('singer').innerText = getSong;
                 const songName = data['data']['0']['title']
                document.getElementById('artist').innerText = songName;
             // 2nd song
                const getSong2 = data['data']['1']['artist'].name;
                document.getElementById('singer1').innerText = getSong2;
                const songName2 = data['data']['1']['title']
                document.getElementById('artist1').innerText = songName2;
             //3rd song   
                const getSong3 = data['data']['2']['artist'].name;
                document.getElementById('singer2').innerText = getSong3;
                const songName3 = data['data']['2']['title']
                document.getElementById('artist2').innerText = songName3;
             //4th song
                const getSong4 = data['data']['3']['artist'].name;
                document.getElementById('singer3').innerText = getSong4;
                const songName4 = data['data']['3']['title']
                document.getElementById('artist3').innerText = songName4;
             //5th song
                const getSong5 = data['data']['4']['artist'].name;
                document.getElementById('singer4').innerText = getSong5;
                const songName5 = data['data']['4']['title']
                document.getElementById('artist4').innerText = songName5;
             //6th song
                const getSong6 = data['data']['5']['artist'].name;
                document.getElementById('singer5').innerText = getSong6;
                const songName6 = data['data']['5']['title']
                document.getElementById('artist5').innerText = songName6;
             //7th song
                const getSong7 = data['data']['6']['artist'].name;
                document.getElementById('singer6').innerText = getSong7;
                const songName7 = data['data']['6']['title']
                document.getElementById('artist6').innerText = songName7;
             //8th song
                const getSong8 = data['data']['7']['artist'].name;
                document.getElementById('singer7').innerText = getSong8;
                const songName8 = data['data']['7']['title']
                document.getElementById('artist7').innerText = songName8;
             //9th song
                const getSong9 = data['data']['8']['artist'].name;
                document.getElementById('singer8').innerText = getSong9;
                const songName9 = data['data']['8']['title']
                document.getElementById('artist8').innerText = songName9;
             //10 song
                const getSong10 = data['data']['9']['artist'].name;
                document.getElementById('singer9').innerText = getSong10;
                const songName10 = data['data']['9']['title']
                document.getElementById('artist9').innerText = songName10;


                fetch('https://api.lyrics.ovh/v1/'+getSong+'/'+songName)
                .then (res => res.json())
                .then (data => {
                    const songLyrics = data.lyrics 
                    document.getElementById('show').innerText = songLyrics;

                })
            })
               
           })
       
  