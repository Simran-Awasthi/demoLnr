import { v4 } from "uuid";

export const folderData = [
    {
        id: '962aa0f6-bfcc-4580-8551-9ec80ab87e71',
        name: 'collection.1',
        type:'collection',
        content: null,
        isActive: false,
        parentId: null,
    },
    {
        id: '1e125e5c-9467-4610-8dc9-c0228d4fa81d',
        content: null,
        name: 'collection.1.1',
        type:'collection',
        isActive: false,
        parentId: '962aa0f6-bfcc-4580-8551-9ec80ab87e71',
    },
    {
        id: '297dd3c5-36f4-4f73-bcaa-9da7fa97aa21',
        content: null,
        type:'collection',
        name: 'collection.1.1.1',
        isActive: false,
        parentId: '1e125e5c-9467-4610-8dc9-c0228d4fa81d'
    },
    {
        id: '651ad96a-a5f0-4f01-8609-2250a62b3704',
        content: null,
         type:'collection',
        isActive: false,
        name: 'ContentPage1.1.1.1',
        parentId: '297dd3c5-36f4-4f73-bcaa-9da7fa97aa21',
    },
    {
        id: '3ed5b705-e2c2-4982-8b88-8c0297ca4dbd',
        content: null,
        type:'item',
        isActive: false,
        name: 'Quiz',
        parentId: '297dd3c5-36f4-4f73-bcaa-9da7fa97aa21',
    },
    {
        id: '94c757b1-fa69-4ffb-ad0b-c341b5170d4e',
        content: null,
        type:'item',
        isActive: false,
        name: 'Videos',
        parentId: '297dd3c5-36f4-4f73-bcaa-9da7fa97aa21',
    },
    {
        id: '1558765b-a52d-4bf0-aceb-fee5c198966d',
        content: null,
        type:'item',
        isActive: false,
        name: 'WYSIWYG Editor',
        parentId: '297dd3c5-36f4-4f73-bcaa-9da7fa97aa21',
    }
]