 
            const inputArea = document.getElementById('input');
            const searchButton = document.querySelector('.search-btn');
            const albumList = document.querySelector('.album-list')
            const albumLIst = albumList.querySelectorAll('strong');
            const artistName = albumList.querySelectorAll('span');
            const lyricBtnList1 = albumList.querySelectorAll('button');
            const lyricElement = document.querySelector('.lyric');
            const lyricElement2 = document.querySelector('.lyric2');
            console.log(lyricBtnList1);
           
            searchButton.addEventListener('click', () => {
                fetch(`https://api.lyrics.ovh/suggest/${inputArea.value}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        for (let i = 0; i < albumLIst.length; i++) {
                            let album = data.data[i].album.title;
                            let artist = data.data[i].artist.name;
            
                            albumLIst[i].innerText = album;
                            artistName[i].innerText = artist;
                        }
            
                        lyricBtnList1.forEach((element, index) => {
                            element.addEventListener('click', () => {
                                let artist = data.data[index].artist.name;
                                let songTitle = data.data[index].title;
                                lyricsShowFunc(artist, songTitle, index)
                                
                                 
                            })
                        });
            
                        //  Extra works
                        const searchInfo = document.querySelector('.search-result');
                        const lyricsName = searchInfo.querySelectorAll('.lyrics-name');
                        const artistEl = searchInfo.querySelectorAll('span');
                        const getLyricsBtnList2 = searchInfo.querySelectorAll('button')
                    
                        for (let i = 0; i < 4; i++) {
                            let album = data.data[i].album.title;
                            let artistName = data.data[i].artist.name;
                            lyricsName[i].innerText = album;
                            artistEl[i].innerText = artistName;
                        }
                        getLyricsBtnList2.forEach((element, index) => {
                            element.addEventListener('click', () => {
                                let artist = data.data[index].artist.name;
                                let songTitle = data.data[index].title;
                                lyricsShowFunc(artist, songTitle, index)
                                
                            })
                        })
                    })
            })
              const  titleElement = document.getElementById('title1');
              const  titleElement2= document.getElementById('title2');
            
            const lyricsShowFunc = (artist, songTitle, index) => {
                fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
                    .then(response => response.json())
                    .then(data => {
                        lyricElement.innerHTML = data.lyrics;
                        lyricElement2.innerHTML = data.lyrics;
                         titleElement.innerText = artist + " - " + songTitle;
                         titleElement2.innerText = artist + " - " + songTitle; 
                    })
            }