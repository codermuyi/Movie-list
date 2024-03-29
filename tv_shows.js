
const tvShows = [
  {
    name: "stranger things",
    seasons: "4",
    status: "active",
    imgLink: "https://t3.gstatic.com/images?q=tbn:ANd9GcQzBPeJBL1nrbE44py9eA0PFWzRQjQlW4NwjIBKuOMjVi4ou8UR",
    wikiLink: "https://www.google.com/url?q=https://en.m.wikipedia.org/wiki/Stranger_Things&sa=U&ved=2ahUKEwjv1uyhtsfzAhUU5uAKHeMCB00QFnoECAUQAg&usg=AOvVaw0Z_sw39TVLMn6e-BBfB6mC",
  },
  {
    name: "the boys",
    seasons: "3",
    status: "active",
    imgLink: "https://www.google.com/url?q=https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ%40._V1_FMjpg_UX1000_.jpg&sa=U&ved=0ahUKEwi-qpSc-cnzAhVNzaQKHcVADRoQ5hMIBQ&usg=AOvVaw1kTRVpuY7jm9u98jyxdKPQ",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Boys_(2019_TV_series)&ved=2ahUKEwjmwqvWt83zAhVD4eAKHeIICeIQFnoFCJEBEAE&usg=AOvVaw2Iw5vWcailwSjJc2lymBWT"
  },
  {
    name: "The flash",
    seasons: "8",
    status: "active",
    imgLink: "https://www.google.com/url?q=https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_FMjpg_UX1000_.jpg&sa=U&ved=0ahUKEwiskJST-8nzAhVCsKQKHauqDSkQ5hMIBQ&usg=AOvVaw0eIkYhqqahoBw3rFjHV2nq",
    wikiLink: "https://www.google.com/url?q=https://en.m.wikipedia.org/wiki/The_Flash_(2014_TV_series)&sa=U&ved=2ahUKEwjDwIKV-snzAhVD4eAKHb3FCOoQFnoECAoQAg&usg=AOvVaw12V1kfBC5Xr5j3ueauctIT"
  },
  {
    name: "Shadow and bone",
    seasons: "1",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn00KBSXbRWMhmTqgZb3V8KUHyk8HqGM3iXg&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Shadow_and_Bone_(TV_series)&ved=2ahUKEwiZr5Ljtc3zAhWvB2MBHQaZD4UQFnoECFkQAQ&usg=AOvVaw37579pFi7FsfJV-5p7QKFO"
  },
  {
    name: "the witcher",
    seasons: "2",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4rei1iMNOB3-COzBocSSuVDTlZP26Oo9JA&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Witcher_(TV_series)&ved=2ahUKEwiVt_PKts3zAhUC6OAKHb5qDCwQFnoECFMQAQ&usg=AOvVaw0_JgZY_IRdE0JZZDJd0VuM"
  },
  {
    name: "the equalizer",
    seasons: "2",
    status: "active",
    imgLink: "https://m.media-amazon.com/images/M/MV5BYmY3MTgwYWUtMTc2NC00ZDdmLWIyNDAtOGJkNTQyZjM0NDA5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Equalizer_(2021_TV_series)&ved=2ahUKEwifppKUt83zAhWMsBQKHXfVDd4QFnoECDgQAQ&usg=AOvVaw0wYeWu7TBYWLp3aaNiFtZv"
  },
  {
    name: "chucky",
    seasons: "1",
    status: "active",
    imgLink: "https://www.dreadcentral.com/wp-content/uploads/2021/09/Chucky-TV-series-poster-750x938.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Chucky_(TV_series)&ved=2ahUKEwjH2vv3tM3zAhWK2hQKHbsnCUMQFnoECG4QAQ&usg=AOvVaw29HhsnTKNBMxR8nwgeMyw1"
  },
  {
    name: "young sheldon",
    seasons: "6",
    status: "airing",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OpPJKb9npvsHvF8iWPSZs3AL2QOU6hJV_A&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Young_Sheldon&ved=2ahUKEwiEl-TxtM3zAhVC0uAKHWa7BoEQFnoECHQQAQ&usg=AOvVaw2H-d9at71TA1vCOeNyrUK0&cshid=1634335315403"
  },
  {
    name: "the mandalorian",
    seasons: "2",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwP4CfCKPjfkjfEz3VsG-0rmBdND389E7NhhsMGVAcryxlSeNne7EDPc&s=10",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Mandalorian&ved=2ahUKEwj7ysOPtM3zAhWLA2MBHWOeDFMQFnoECDEQAQ&usg=AOvVaw0mRW4s2BczkVJHCIouB9Em"
  },
  {
    name: "one of us is lying",
    seasons: "1",
    status: "active",
    imgLink: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1632078539l/58679358.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/One_of_Us_Is_Lying_(TV_series)&ved=2ahUKEwiE3-Shs83zAhVFcBQKHda-AlUQFnoECEIQAQ&usg=AOvVaw0Rb0gN1wKo_x_6pFIZ1Em-"
  },
  {
    name: "squid game",
    seasons: "1",
    status: "active",
    imgLink: "https://i.pinimg.com/736x/c5/1b/ef/c51bef377278466e6419a8e91d136dfb.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Squid_Game&ved=2ahUKEwj29YfAss3zAhVs7OAKHfjkD48QFnoECDIQAQ&usg=AOvVaw06tnqIsmH3ow2NmQ48i9zo&cshid=1634334877542"
  },
  {
    name: "mare of easttown",
    seasons: "1",
    status: "ended",
    imgLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpceOhkOM43O1-czOGBiyaz76nEO3uPh325sQUSmAxKwvQeQ_2",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Mare_of_Easttown&ved=2ahUKEwjM0drbsc3zAhWNkxQKHbX7AUUQFnoECD0QAQ&usg=AOvVaw0Iv1h53p6Q3-nN7Q5ABrsU"
  },
  {
    name: "see",
    seasons: "3",
    status: "ended",
    imgLink: "https://static.netnaija.com/i/qEQN25YXa6W.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/See_(TV_series)&ved=2ahUKEwjX5fepqs3zAhUT8eAKHW6TCr0QFnoECDoQAQ&usg=AOvVaw0Ho7s201d5S0w28x6N8Vy3"
  },
  {
    name: "Stargirl",
    seasons: "3",
    status: "airing",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3xp4e9LMjZU8NbaANBeWiik7GKQW5qGEB1Fb_IVA8XBFShZSby3chLCE&s=10",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Stargirl_(TV_series)&ved=2ahUKEwjIweqwuM3zAhUMnxQKHUcvARQQFnoECDgQAQ&usg=AOvVaw18RIIxO7TwG8UdJLLEaz5Y&cshid=1634336157384"
  },
  {
    name: "titans",
    seasons: "3",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8O13-lXVw5S15BCPA8mC1H77kBFwxK7vXg&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Titans_(2018_TV_series)&ved=2ahUKEwjzgtLruM3zAhUQnBQKHdrbBsgQFnoECG8QAQ&usg=AOvVaw23eWjSBSzPfNquDahQEJ_B"
  },
  {
    name: "money heist",
    seasons: "5",
    status: "ended",
    imgLink: "https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    wikiLink: "https://www.google.com/url?q=https://en.m.wikipedia.org/wiki/Money_Heist&sa=U&ved=2ahUKEwjdipLiy83zAhW1D2MBHZ4DAnEQFnoECAcQAg&usg=AOvVaw0Yvut4xN2n3SlJyJ3nvZa-"
  },
  {
    name: "his dark materials",
    seasons: "2",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWPebXZB_dsV1H5OaslJW6zBTtbEbOzj5ySmQkwNWIC2i4nidD5K6_TDgv&s=10",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/His_Dark_Materials_(TV_series)&ved=2ahUKEwil5vmBgNLzAhWSAmMBHZCoAF8QFnoECBkQAQ&usg=AOvVaw05viLj0Ew2l037HZbX4jVb"
  },
  {
    name: "cobra kai",
    seasons: "5",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwifANkM1mg9xrIN3xgj-zicmmbsXQA3fEdsie8oaAd2_bVUGEn1dvSViD&s=10",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Cobra_Kai&ved=2ahUKEwjWiIyTqNvzAhXh8uAKHWlIB8AQFnoECCcQAQ&usg=AOvVaw1WVJE52D8LHW_xqSNzfwaP"
  },
  {
    name: "Legacies",
    seasons: "4",
    status: "ended",
    imgLink: "https://m.media-amazon.com/images/M/MV5BZmMwNDczMDUtNDU0Mi00MjIyLWI1NTktNzM4Yzc1MTNmZDIxXkEyXkFqcGdeQXVyOTQ0NTEzMzk@._V1_.jpg",
    wikiLink: "https://www.google.com/url?q=https://en.m.wikipedia.org/wiki/Legacies_(TV_series)&sa=U&ved=2ahUKEwj61OGS7ODzAhW9CGMBHeKRAHAQFnoECAIQAg&usg=AOvVaw1Wm6Epb3hWVhJ_NYINiTgO"
  },
  {
    name: "locke and key",
    seasons: "3",
    status: "ended",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CxdQS09XXhiRQ42mBKIfx85-ARuYwYVB_w&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Locke_%2526_Key_(TV_series)&ved=2ahUKEwiW6Zi4iuHzAhVlAWMBHe9sACwQFnoECEYQAQ&usg=AOvVaw0SdQbIYpAGdeTQWmLVABdD"
  },
  {
    name: "alice in borderland",
    seasons: "1",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUf_oa-viRBK55QuSHw4P5JJHLVjL5BzHlA&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Alice_in_Borderland_(TV_series)&ved=2ahUKEwj11L7XiuHzAhVPEWMBHY-hBIsQFnoECDEQAQ&usg=AOvVaw3aH7a2Q9c_atjpuaYqK6gM"
  },
  {
    name: "The Expanse",
    seasons: "6",
    status: "ended",
    imgLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIHC4nuAAIZGtftF7rH6wqWlSzokeQoBJVnH4JLXVGfwtAi6rH",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Expanse_(TV_series)&ved=2ahUKEwiqhpiY4Ln1AhVK6uAKHdPJB3IQFnoECAUQAQ&usg=AOvVaw0TQnJGRSU-n3FX_K86-how"
  },
  {
    name: "Yellowjackets",
    seasons: "1",
    status: "active",
    imgLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfOF9lh2FjffHZlth4IFAI1a9n8ec3W9ELZC2UlCRCotaZrcuk",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Yellowjackets_(TV_series)&ved=2ahUKEwj6qJ2g4Ln1AhUJA2MBHR9aCLIQFnoECE4QAQ&usg=AOvVaw0bhBCh6DL0gFCezFQfxsl6"
  },

  {
    name: "the wheel of time",
    seasons: "1",
    status: "active",
    imgLink: "https://m.media-amazon.com/images/M/MV5BYzA2Nzk5M2EtNWY4Yi00ZDY4LThkZTgtYjhhNWEyMGY0MjFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Wheel_of_Time_(TV_series)&ved=2ahUKEwjP8eiV37n1AhWOnRQKHTFSD7QQFnoECFcQAQ&usg=AOvVaw2pNKmH4VAlS_5GTerCzeup"
  },

  {
    name: "peacemaker",
    seasons: "1",
    status: "active",
    imgLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStjv9fJUqFDD8ZDbZcgGK2NXUX1uEnba4rR2nwpuqxoJ0zJgiR",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Peacemaker_(TV_series)&ved=2ahUKEwjv65bY37n1AhWlA2MBHSoQDXIQFnoECEgQAQ&usg=AOvVaw24O_ZCz0z5Dck_QIVRZCiO"
  },
  {
    name: "the book of boba fett",
    seasons: "1",
    status: "TBA",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5ejCC1W9MRXeU172gTv4DeN7h_riaArplAPTb45foWGAUYTZNjMsFSu5&s=10",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Book_of_Boba_Fett&ved=2ahUKEwjT4eyT4rn1AhUMmxQKHcm3B3IQFnoECHQQAQ&usg=AOvVaw1KIqD_h7Yu6Jr8m9frTiE0"
  },
  {
    name: "ted lasso",
    seasons: "2",
    status: "active",
    imgLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-AQWTiuRhTY6uHj13DLe-37jddf4ZOgNs99sciRZcpMMXWryJ",
    wikiLink: "https://en.wikipedia.org/wiki/Ted_Lasso"
  },
  {
    name: "reacher",
    seasons: "1",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM88WOtwaWcilhTKO4ZxT5fZijDlVuWqTZ2JG_mGhIZCYmIYB9",
    wikiLink: "https://en.wikipedia.org/wiki/Reacher_(TV_series)"
  },
  {
    name: "inventing anna",
    seasons: "1",
    status: "ended",
    imgLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxIf-uuDu5GajlAvhHYJzjW_LhcYi-cmMbOCBX47IcTfLg2Dav",
    wikiLink: "https://en.wikipedia.org/wiki/Inventing_Anna"
  },
  {
    name: "severance",
    seasons: "1",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0ZlBWHVfpRi2iWRCh_t2f6viHwyKMAfJB3paBHmsL78_b06T",
    wikiLink: "https://en.wikipedia.org/wiki/Severance_(TV_series)"
  },
  {
    name: "all of us are dead",
    seasons: "1",
    status: "active",
    imgLink: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/All_of_Us_Are_Dead.jpeg/250px-All_of_Us_Are_Dead.jpeg",
    wikiLink: "https://en.wikipedia.org/wiki/All_of_Us_Are_Dead"
  },
]

const random = n => Math.round(Math.random() * n)
const uniqueID = () => ['a', 'b', 'c', 'd', 'e'][random(4)] + random(1000);

for (let tvShow of tvShows) {
  tvShow.id = uniqueID()
}
