import os
import json

# Product categories and their items
categories_data = {
    'slides': [
        'Dolphin slide', 'Tower slide', 'aPPU SLIDE', 'bear slide', 'big slide',
        'carrot slide', 'castle slide', 'cute slide', 'dolphin slide cum swing',
        'elephant slide', 'fish slide', 'folding slide', 'giraffe slide(jr)',
        'giraffe slide', 'goal post slide', 'happy slide with swing', 'happy slide',
        'hut slide', 'jumbo slide', 'junior slide', 'rabbit slide', 'round metal slide',
        'small slider', 'zig zag metal slide', 'double slider'
    ],
    'rockers': [
        'boat rocker', 'donald rocker', 'elephant rocker', 'engine rocker',
        'fish rocker', 'horse rocker', 'jumboo rocker', 'new rocker(dlx)',
        'parrot rocker', 'ponny rocker', 'ship rocker', 'tiger bike rocker',
        'elephant multi rocker', 'giraffe multi rocker', 'hen multi rocker',
        'horse multi rocker', 'crocodile ride', 'dino ride', 'dolphin rider',
        'dual rider', 'fish rider', 'horse rider(with base)', 'horse rider',
        'ponny rider(with base)', 'ponny rider', 'puppy rider(with base)',
        'puppy rider', 'fish spring rider(heavy)', 'horse spring rider(heavy)', 'rabbit v'
    ],
    'play_stations': [
        '2 in 1  play station', '3 in 1 play station', 'combo play station',
        'hide & seek play station', 'jumbo play station', 'multi play station',
        'new play station', 'play junction(medium)', 'play junction(regular)',
        'play junction(small)', 'playland & playpen', 'playpen with slide',
        'three in one  play station', 'two in one play station', 'tomato play house'
    ],
    'furniture': [
        'baby bench', 'baby chair (senior)', 'baby chair (small)', 'baby chair',
        'chair (big metal)', 'combined metal desk with chair', 'dual study desk',
        'height adjustable desk', 'metal desk with plastic top', 'mini high chair',
        'mono desk(big)', 'mono desk(small)', 'royal desk with plastic chair',
        'teacher chair', 'big metal mesh table with 2chairs', 'big metal mesh table with bench',
        'double metal mesh table with 2 chairs', 'fish table', 'moon shape table',
        'regular rectangle shape table', 'rergular table with chair', 'round table',
        'single metal mesh table with chair', 'square shape table', 'table with bencb',
        'tri table with chair'
    ],
    'play_equipment': [
        '3 in  1 basket ball goal post pour a ring basket ball stand', 'activity gym',
        'baby basket ball & dart board(2 in 1)', 'balancer', 'dino-see-saw',
        'duck jumper', 'fish merry go round', 'giraffe double swing cum basket ball',
        'giraffe slide cum swing', 'goal post', 'happy swing', 'hen see saw',
        'horse merry go round', 'horse see saw(big)', 'horse see saw',
        'hurdles', 'pour a ring', 'roller coster', 'super merry go round(with roof)',
        'triangle see saw', 'U.D.Cra'
    ],
    'storage': [
        'book stand', 'bunny dustbin', 'capsicum book stand', 'clown dustbin',
        'joker dustbin', 'monkey dustbin', 'multi colour book stand', 'multi puporse rack',
        'swan dustbin', 'baby shoe & toy rack', 'towel and water bottle holde',
        'toy stand'
    ],
    'baby_products': [
        'baby aeroplane car with music & lights', 'baby balls', 'baby big panda cara',
        'baby caliber car', 'baby go car(sfx)', 'baby happy car', 'baby panda car',
        'baby rocket car(jr.)', 'baby rocket car(sr.)', 'baby sports car',
        'baby teddy car', 'baby twist car(dlx)', 'baby twist car', 'baby vintage car(jr)',
        'ball pool (hexa)', 'ball pool(round)', 'ball pool(sfx)', 'big blocks',
        'bricks', 'EVA mats', 'sand box cum pool', 'school bus', 'train', 'tunnel'
    ]
}

print("Product categories created successfully!")
print(f"Total new products: {sum(len(items) for items in categories_data.values())}")
