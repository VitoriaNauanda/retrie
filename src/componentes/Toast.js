import React, { useEffect } from 'react';
import { cores } from '../assets/cores';
import { Imagens } from '../assets/Imagens';
import WebFont from 'webfontloader';
import { Search2Icon, AddIcon, DeleteIcon } from '@chakra-ui/icons'
import {
    Wrap,
    WrapItem,
    Button,
    useToast,
} from '@chakra-ui/react';


export function useCreateToast(i) {
    const toast = useToast()
    const statuses = ['success', 'error']
    var status = statuses[i]
    if (i == 0) {
        var title = `Ação realizada`
    }
    if (i == 1) {
        var title = `Ação não realizada`
    }
    return (
        toast({
            title: title,
            status: status,
            isClosable: true,
        })
    )
}

