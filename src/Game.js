import React, { useEffect, useState } from 'react'

const objects = [
    {
        id: 1,
        type: "a",
        open: false,
        src: "https://img3.zakaz.ua/src.1597935465.ad72436478c_2020-08-20_Alina/src.1597935465.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg",
    },
    {
        id: 2,
        type: "b",
        open: false,
        src: "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
    },
    {
        id: 3,
        type: "c",
        open: false,
        src: "https://static9.depositphotos.com/1642482/1148/i/600/depositphotos_11489464-stock-photo-pears.jpg",
    },
    {
        id: 4,
        type: "d",
        open: false,
        src: "https://static9.depositphotos.com/1642482/1149/i/600/depositphotos_11491656-stock-photo-strawberry.jpg",
    },
    {
        id: 5,
        type: "e",
        open: false,
        src: "https://static.turbosquid.com/Preview/2020/01/30__07_04_21/BunchofGreenGrapesvray3dmodel000.jpg3388A1AA-CE2A-477A-ADD8-2C74838565FFLarge.jpg",
    },
    {
        id: 6,
        type: "f",
        open: false,
        src: "https://i5.walmartimages.ca/images/Enlarge/094/504/6000200094504.jpg",
    },
    {
        id: 7,
        type: "g",
        open: false,
        src: "https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg",
    },
    {
        id: 8,
        type: "h",
        open: false,
        src: "https://foodcity.ru/storage/products/October2018/NTqwdSD2SiXVflQqOfgi.jpg",
    },
    {
        id: 9,
        type: "i",
        open: false,
        src: "https://static.kavkazsuvenir.ru/files/products/suvenir-derevyannyj-granat-9184.360x360.JPG",
    },
    {
        id: 10,
        type: "j",
        open: false,
        src: "https://media.baamboozle.com/uploads/images/45725/1621635486_86854.jpeg",
    },
];
const allList = [...objects];
objects.forEach((el, ind) => {
    allList.push({ ...el, el: el.id += 10 })
})

allList.sort(() => Math.random() - 0.5);
const bgUrl = 'https://iconape.com/wp-content/png_logo_vector/question-circle.png'

export default function Game() {
    let [one, setOne] = useState({ id: -1, type: -1 });
    let [two, setTwo] = useState({ id: -2, type: -2 });
    let [opened, setOpened] = useState([])

    function click(id, type) {
        if (one.id === -1) {
            setOne({ id: id, type: type })
        } else if (one.id !== -1 && two.id === -2) {
            setTwo({ id: id, type: type })
        } else {
            setOne({ id: id, type: type })
            setTwo({ id: -2, type: -2 })
        }
    }

    useEffect(() => {
        if (one.type === two.type) {
            setOpened([...opened, one.id, two.id])
            console.log(opened);
        }
    }, [two])

    function open(el) {
        if (opened.includes(el.id)) {
            return true
        } else if (el.id === one.id || el.id === two.id) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className='content'>
            <div className='countdiv'>
                <h1 className='count'>{opened.length / 2}</h1>
            </div>
            <div className='game'>
                <div>
                </div>
                {
                    allList.map((el) => {
                        return (
                            <div className='container' key={el.id} onClick={() => click(el.id, el.type)}>
                                {
                                    (<img src={open(el) ? el.src : bgUrl} className='image' />)
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}