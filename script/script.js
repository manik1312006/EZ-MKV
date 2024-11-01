const movies = [
    { title: "Bhool Bhulaiyaa 3[2024]", image: "https://m.media-amazon.com/images/M/MV5BOTk1MDQxZTQtMTI0OC00ZTc5LTgxNjgtNzhmY2M4ZWY0OTgyXkEyXkFqcGc@._V1_.jpg", link: "https://firebasestorage.googleapis.com/v0/b/ip-tv-1312.appspot.com/o/Bhool%20Bhulaiyaa%203%20(2024).mkv?alt=media&token=c4d20d90-9893-4cee-8009-f9162098b658" },

    { title: "Singham Again[2024]", image: "https://m.media-amazon.com/images/M/MV5BMjQzZDExZDEtYjAxYy00ZGVhLWE4YWItNTVkZjA5ZjVjZWM3XkEyXkFqcGc@._V1_.jpg", link: "https://firebasestorage.googleapis.com/v0/b/ip-tv-1312.appspot.com/o/Singham%20Again%20(2024).mkv?alt=media&token=6802808e-c050-4524-a93e-3cd298c18a1b" },

    { title: "The Guilty [2021]", image: "https://m.media-amazon.com/images/M/MV5BZmVjNzM0YmItZGQwYy00MzA4LTkwYjAtMmJkNWVmOTRkZGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "html/the guilty.html" },

    { title: "Life Like 2019 [English Only]", image: "https://m.media-amazon.com/images/M/MV5BMjU3ZDZmOWMtZjMzOS00ZjQxLThkNWQtNWEzZDcwZTczY2QxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "html/life like.html" },

    { title: "Ramayana - The Legend of Prince Rama [1992]", image: "https://m.media-amazon.com/images/M/MV5BZWY1NTMwMTEtNjNiMi00YTkyLTlmYWEtOTQ5ZTg0YWY4ZTU0XkEyXkFqcGc@._V1_.jpg", link: "html/Ramayana - The Legend of Prince Rama.html" },

    { title: "Do Patti [2024]", image: "https://m.media-amazon.com/images/M/MV5BZjRmMzA2MWYtZGEyMS00YjY4LWJiOTEtNjU1NWMyYTRjM2M3XkEyXkFqcGc@._V1_.jpg", link: "html/Do Patti.html" },

    { title: "It's What's Inside [2024]", image: "https://m.media-amazon.com/images/M/MV5BNDkxOTZmZTYtYTNmNS00MDk3LWE0MDAtMzY5M2Y5YmU1MmI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "html/its whats inside.html" },

    { title: "Venom: The Last Dance HDTS [2024]", image: "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "html/Venom The Last Dance.html" },

    { title: "The Substance [2024]", image: "https://m.media-amazon.com/images/M/MV5BZjdlMjAxMGEtZjkzNy00NzI3LTllOWUtMmZkY2FjMjlmZDhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "html/The Substance.html" },

    { title: "Rose Rosy Te Gulaab [2024]", image: "https://m.media-amazon.com/images/M/MV5BNGE1MWNjZDYtOWZmNy00ZmQyLThjNTEtYTkzOTRkZjAzMjZiXkEyXkFqcGc@._V1_.jpg", link: "html/Rose Rosy Te Gulaab.html" },

    { title: "Joker Folie a Deux [2024] HDTS", image: "https://m.media-amazon.com/images/M/MV5BMjRmOWFiMmEtNDYxYy00YzcyLWIxM2ItNjY3ZjU3MWM4MDJmXkEyXkFqcGdeQXVyMTU5OTc2NTk@._V1_FMjpg_UX1000_.jpg", link: "html/Joker Folie a Deux.html" },

    { title: "Taaza Khabar S02 [2024]", image: "https://imgs.search.brave.com/armwLomNj_5VBbFzYhOdOj0RyZZZfUJ4MxWmVTGkWZk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qQXpNREV6/Wm1VdFlqZ3pNeTAw/TlRZeExXSmxPREl0/WVRNeVpHSTRZemRt/WkdZNFhrRXlYa0Zx/Y0djQC5qcGc", link: "html/Taaza_Khabar_S02.html" },

    { title: "The Exorcist: Believer [2023]", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqidJLh-50JGEcfumYuExyQMPsTyH2lI3P2Y6vAi17h_WkNEkh6OtlPI&s=10", link: "https://drive.google.com/file/d/1zYAb6jYLWG68NZi3Ww5S0IBStYV9Y5R0/view?usp=drivesdk" },

    { title: "The Social Network [2010]", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJcqeh6yTG4NIKZg4p2eBCQewQFVuE-VghQY5R9zwdatciGh7E_RCTuXD&s=10", link: "https://drive.google.com/file/d/1FcCqeceD8FszOQQiIvWD561gxWHh1nzf/view?usp=drivesdk" },

    { title: "Maestro [2021] Watch Online YouTube(No-Ads)", image: "https://m.media-amazon.com/images/M/MV5BOGE4NjBhNDMtYWU4ZS00YjFkLWE0YmMtYjhmNTAyMTZkM2Q1XkEyXkFqcGdeQXVyMTA1MTMwNDc@._V1_FMjpg_UX960_.jpg", link: "html/maestro.html" },

    { title: "Alien:Romulus [2024] HDTS", image: "https://imgs.search.brave.com/tidiFeoEtsUCutH4NfhyO_LJ_bKn7Ai6DBnlVb1TecY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EVTBOamN3/T0dRdE5qTmpPUzAw/TnpRM0xXSXdNMll0/WVdWbU9EWmpNelF6/TjJFeFhrRXlYa0Zx/Y0djQC5qcGc", link: "html/Alien_Romulus.html" },

    { title: "Inside Out 2 [2024] WEBRIP", image: "https://imgs.search.brave.com/R8XdooS_Ua6kRHVI2IVW3v0CrwEi3aeFSTaPqpYYRfs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9wX2luc2lk/ZW91dDJfdjNfNzk4/X2YyNDg4MzczLmpw/ZWc", link: "html/inside_out_2.html" },

    { title: "Double iSmart [2024] HDCAM", image: "https://m.media-amazon.com/images/M/MV5BYzUwNzc3YzUtOGE4Ni00M2MwLTljYzctY2EyMmExNmUzZmM4XkEyXkFqcGc@._V1_.jpg", link: "https://firebasestorage.googleapis.com/v0/b/ip-tv-1312.appspot.com/o/Double%20iSmart%20%5B2024%5D%20HQ.mp4?alt=media&preload=none&autoplay=none&token=a3c01e22-eae4-4ff7-ba21-dc5ad75b7d3f" },

    { title: "Stree 2 [2024] WEBRIP", image: "https://m.media-amazon.com/images/M/MV5BMTA1NmUxYzItZmVmNy00YmQxLTk4Y2UtZjVkMWUwMWQ5N2IxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://pixeldra.in/api/file/2oG6cdMe?download" },

    { title: "Phir Aayi Hasseen Dillruba [2024]", image: "https://m.media-amazon.com/images/M/MV5BYmM5Zjc2ZmMtOWIwMy00OWY4LTkzZmQtODA5NTVlNDFlNGZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://firebasestorage.googleapis.com/v0/b/ip-tv-1312.appspot.com/o/Phir.Aayi.Hasseen.Dillruba.2024.1080p.mp4?alt=media&preload=none&autoplay=none&token=f2e32056-a9ce-46d9-92f2-efbce8c906d1" },

    { title: "Deadpool And Wolverine [2024] HDTS 1080p Hindi", image: "https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://drive.google.com/file/d/1uS1fvM1TAj0uloAwR1gZsfEEp18ESvd9/view?usp=drive_link" },

    { title: "Bad Newz [2024] 1080p HDTS", image: "https://m.media-amazon.com/images/M/MV5BZjIzYjY3ZTQtNjA3Yi00MTFiLWExM2ItNjYxZmI1ZjcyMTYxXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg", link: "https://firebasestorage.googleapis.com/v0/b/ip-tv-1312.appspot.com/o/Bad.Newz.2024.1080p.HDTS.mp4?alt=media&preload=none&autoplay=none&token=f1654047-9668-457f-90a1-441f3cf54386" },

    { title: "Tribhuvan Mishra CA Topper S01 Complete Series", image: "https://m.media-amazon.com/images/M/MV5BNTg0ZjhhMmQtNTQxYy00NWExLTg1MTgtM2IwZWU1ODE3NzdkXkEyXkFqcGc@._V1_.jpg", link: "https://drive.google.com/file/d/1Kj7bdHgBjVME_Zd5iqd42VHNhtOB5NfX/view?usp=drivesdk" },

    { title: "John Wick [01-04]", image: "https://imgs.search.brave.com/8xs0pTjkM7iaL0K6PM3OvYZGEJZQUVhbodbpQMhB-HM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxT2hYOXRicnNM/LmpwZw", link: "https://drive.google.com/drive/folders/1dEYDOV_bh9GQw8TVMrakpfl8py68C_Bg?usp=sharing" },

    { title: "Wild Wild Punjab [2024]", image: "https://imgs.search.brave.com/QvbWfo8zvEV4IAxXgLHXL5Eue2uL-vGa9H_Y0DYv2Ng/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqQTNZMkUw/WlRFdE5qQmpNaTAw/Wm1Nd0xUa3habUl0/Wm1SaU9EazRZbU16/TldNeFhrRXlYa0Zx/Y0djQC5qcGc", link: "https://drive.google.com/file/d/1krqrk3-Hlb_T7oBPYN1yzOfrjSNxZa4U/view?usp=drive_link" },

    { title: "Mirzapur [S01 - S03]", image: "https://firebasestorage.googleapis.com/v0/b/ip-tv-1312.appspot.com/o/mirzapur_cover.jpg?alt=media&token=13264250-dda5-4b3e-94b7-5aaff0df3005", link: "html/mirzapur.html" },

    { title: "Jatt And Juliet 3 [2024]", image: "https://imgs.search.brave.com/E9gzkDYN9uUsW71U1wGCTPqvFVC0SWcXcYjxWE8xv0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHUTFaREEz/WlRBdE5tVXdNeTAw/Wmpjd0xUbGpOV0l0/WVRneVptSmpNVEJq/TkRnM1hrRXlYa0Zx/Y0djQC5qcGc", link: "html/jatt_juliet_3.html" },

    { title: "Kalki 2898 AD [2024] HDTS", image: "https://imgs.search.brave.com/Edd2DWH-ffzZw799_iOK4UXV6r6YRvUQGJ_7v-99SyU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/a2Fsa2ktMjg5OC1h/ZC0yMDI0LXJldmll/dy1kaXNjdXNzaW9u/LXRocmVhZC1zcG9p/bGVycy1tdXN0LXYw/LWtpcXAzMWhkd2F6/YzEuanBnP3dpZHRo/PTI2MjImZm9ybWF0/PXBqcGcmYXV0bz13/ZWJwJnM9NjhkYmEz/ZTFhNGFiMTc0YmVh/ODVmM2FmMzU2MmRm/N2UwN2NkNzU3Ng", link: "https://drive.google.com/file/d/1Ub60Brk7FmMeFyOsmaRc5gf201BW8IgY/view?usp=sharing" },

    { title: "Predestination [2014]", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDT-qjcmY49gNGs9YVZ_qmVuQt7sRSq5UNQvGiCRQRtHsXXxQvAJ9kUte&s=10", link: "https://drive.google.com/file/d/1YZ_zKWXtPXYF-PWZBA8xYNsoTTycwjSB/view?usp=drive_link" },

    { title: "Maharaja [2024]", image: "https://m.media-amazon.com/images/M/MV5BZDJjNzdkNmItZDExMy00NzA3LWE3YzEtM2U3ZGRjMThlMDU2XkEyXkFqcGc@._V1_.jpg", link: "https://drive.google.com/file/d/1RsT8If-7XyTFfkhyHT_7SGcv5r5JaU4A/view?usp=drive_link" },

    { title: "Paatal Lok [2020]", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HM_HxpovQ3vs1e2fpyxSF_kdfpT00belw3_bUNUGnjg3_ZtmgKcLwA8fDhQ-nlBWT6g&usqp=CAU", link: "html/paatal_lok.html" },

    { title: "Murder Mubarak [2024]", image: "https://m.media-amazon.com/images/M/MV5BNTNiZDUwYmYtNTY5ZC00ZTRlLWJhODAtOThmMjM2MTUwNWVhXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg", link: "https://drive.google.com/file/d/16NU4MKekbg9q-aTKFIO2O3L7ercbAR4Q/view?usp=sharing" },

    { title: "Merry Christmas [2024]", image: "https://m.media-amazon.com/images/M/MV5BMmJjOTZhZjAtZmRiNC00ZWZlLWI2MDUtYjkyOTRkNDcxZjkwXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg", link: "https://drive.google.com/file/d/1bTlYaGm1evBXqKfk8nWsDLgo1Pn-75Sz/view?usp=sharing" },

    { title: "Chote Nawab [2020]", image: "https://m.media-amazon.com/images/M/MV5BNjIwODlhZWItYmQzOS00MWY4LThmZmEtMDBmMDBlYWRlMWI4XkEyXkFqcGdeQXVyNzI0NzQyNTk@._V1_FMjpg_UX1000_.jpg", link: "https://drive.google.com/file/d/16wP60jc9_ic9LZHSL4sIjpDkyGc1RLZx/view?usp=sharing" },

    { title: "Chandu Champion [2024]", image: "https://m.media-amazon.com/images/M/MV5BZDAxMmU3NGUtMGEyZC00ZGQ5LTk1ZjEtZGU2YmI0MjUzNWVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://drive.google.com/file/d/1C0W6BfY6J6hme13fwyj3Fq-Hp-P55Lbg/view?usp=sharing" },

    { title: "The Boys Season [01-04]", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyafFY5Ymox_DJdkDQXOdSOQBe8pIUmKBnkQ&s", link: "https://drive.google.com/drive/folders/1-PDgdUcAIzjvzfHMRTHipsURjSMIU8pW?usp=sharing" },

    { title: "Scam 1992", image: "https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_.jpg", link: "https://drive.google.com/drive/folders/1013HGTinT4EJg3JTjQe6apRxfmz8TRyH?usp=sharing" },

    { title: "Ready Player One [2018]", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiA5HJdXUSKxFZ-tERBA5WEpZGIfG9TataA&s", link: "https://drive.google.com/file/d/1Dn_sneL3TB93-_ODxGVj7K8WAEjOMW-U/view?usp=sharing" },

    { title: "College Romance S[01-04]", image: "https://m.media-amazon.com/images/M/MV5BNDlkNzI2MWUtYTkyOS00MTkxLTg0YzctZmQwNjExYjQzOTc1XkEyXkFqcGdeQXVyMTExMTIzMTA5._V1_FMjpg_UX1000_.jpg", link: "https://drive.google.com/drive/folders/1Fv3PBS8VttIfjMLia4QNVQKk3OqahKXz?usp=drive_link" },

    { title: "Grey Man [2022]", image: "https://upload.wikimedia.org/wikipedia/en/5/59/The_Gray_Man_poster.png", link: "https://drive.google.com/file/d/1-nOxV0sXSiNgIlA2KhrPSo-4dPVFgwzl/view?usp=sharing" },

    { title: "Dunki", image: "https://m.media-amazon.com/images/M/MV5BMzNlMDVhZWYtMWZmYy00ZDAzLThlMGMtZGJhMGRkMTczZTg2XkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg", link: "https://drive.google.com/file/d/1-kI5zBqe2Pz6oU3uvGnSpci3dWwgoOPv/view?usp=sharing" },

    { title: "Hacked [2020]", image: "https://m.media-amazon.com/images/M/MV5BZjM4OWU3ZDctMzhjYi00ZjNkLTg0NjMtNGZmNjVkYTBiZjQ2XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg", link: "https://drive.google.com/file/d/1N-tkyQEhqyomayhq8O1J2DaZx19KGlGb/view?usp=sharing" },

    { title: "Godzilla Minus One [2023]", image: "https://m.media-amazon.com/images/M/MV5BOTI5MjNjMTMtN2NiNC00YjBlLTgzMWQtMGRhZDZkYmY1NGU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UX380_CR0,0,380,562_.jpg", link: "https://drive.google.com/file/d/1tUOLinzBlKj9pnh3ajF3BgirYRbQgxeF/view?usp=drive_link" },

    { title: "Dune 2 [2024]", image: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg", link: "https://drive.google.com/file/d/1aAMDrcoJWCvkKy5VTa8C1zERiQinztzH/view?usp=drive_link" },

    { title: "Dune [2021]", image: "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY562_CR1,0,380,562_.jpg", link: "https://drive.google.com/file/d/1Q7cQzkCB1IXmQpmE8SH3f2U6uguDoojh/view?usp=drive_link" },

    { title: "Baahubali Crown Of Blood S01 [2024]", image: "https://m.media-amazon.com/images/M/MV5BMDRjYjU5NjMtOGVjOC00N2RhLWE2ZjMtMjAxY2NmZTEyZGUyXkEyXkFqcGdeQXVyNzkyNTg2NzI@._V1_FMjpg_UX1080_.jpg", link: "https://drive.google.com/drive/folders/1BqUg_eQ1xJKJkEBW8vQ-afGi1pTHK31c?usp=drive_link" },

    { title: "Blackout [2024]", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202405/blackout_1716282014.jpg?downsize=220:308", link: "https://drive.google.com/file/d/1isvs3NGmy9omoY8ABu2aC7Z1zFu004Jn/view?usp=drive_link" },

    { title: "THE FAMILY MAN S 01-02", image: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_QL75_UY562_CR35,0,380,562_.jpg", link: "https://drive.google.com/drive/folders/1J4z4PDzYShBv-IF-Efm2hUmvoJsv65L3?usp=drive_link" },

    { title: "Bionic [2024]", image: "https://m.media-amazon.com/images/M/MV5BMDk1NjU3NDgtMmQwZS00NDkxLWFiYmUtNjM5YmI4MmMyZDFlXkEyXkFqcGc@._V1_.jpg", link: "https://drive.google.com/file/d/13Q75_lh25NmhopFD8QEpP28vNbBJd1PR/view?usp=drive_link" },

    { title: "B & B: Bujji and Bhairava [2024]", image: "https://upload.wikimedia.org/wikipedia/en/e/ea/Bujji_and_Bhairava_poster.jpg", link: "https://drive.google.com/file/d/1hNEiwZYNzaTl7344b8lkuvzHQL9stUK_/view?usp=drive_link" },

    { title: "Brightburn [2019]", image: "https://m.media-amazon.com/images/M/MV5BMjc0YzM2ZjItNzE3OS00NTRhLTkyNTUtMjY5Y2Y5NTU3OWI0XkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_FMjpg_UX1000_.jpg", link: "https://firebasestorage.googleapis.com/v0/b/ip-tv-1312.appspot.com/o/Brightburn.2019.1080p.Hindi.English.webm?alt=media&preload=metadata&autoplay=none&token=883d5cad-34ad-497c-9e8c-5a3fe58508e8" },


    // Add more movies here...
];

const movieList = document.getElementById('movie-list');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

function createMovieElement(movie) {
    const movieItem = document.createElement('a');
    movieItem.href = movie.link;
    movieItem.className = 'movie-item';
    movieItem.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <span>${movie.title}</span>
    `;
    return movieItem;
}

function displayMovies(moviesToShow) {
    movieList.innerHTML = '';
    moviesToShow.forEach(movie => {
        movieList.appendChild(createMovieElement(movie));
    });
}

function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

searchInput.addEventListener('input', filterMovies);
searchButton.addEventListener('click', filterMovies);

// Initial display of all movies
displayMovies(movies);

// Inspect Blocker

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
