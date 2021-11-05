
import React from 'react';
import { AppBar, Toolbar, Button, makeStyles, Theme, useTheme } from '@material-ui/core'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Img from '../images/logo.png'
import styled from 'styled-components'

const useStyles = (theme: Theme) => {
    return makeStyles({
        root: {
            flexGrow: 1
        },
        flex: {
            flex:1
        },
        menuButton: {
            marginLeft: -12,
            marginRight:20
        },
        toolbarMargin: theme.mixins.toolbar,
        img: {
            height: 50,
            textAlign: 'left',
            objectFit: 'contain',
        }
    })
}

const Navbar: React.FC = () => {
    const theme = useTheme()
    const styles = useStyles(theme)()
    return (
        <div className={styles.root}>
            <AppBar
                color='default'
                position='fixed'
                style={{ alignItems: 'center'}}
            >
                <Toolbar>
                <img alt='logo' src={Img} className={styles.img}/>
                    <AnchorLink href='#home' style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <Button>
                            HOME
                        </Button>
                    </AnchorLink>
                    <AnchorLink href='#about' style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <Button color='inherit'>
                            ABOUT
                        </Button>
                    </AnchorLink>
                    <AnchorLink href='#skills' style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <Button color='inherit'>
                            SKILLS
                        </Button>
                    </AnchorLink>
                    <a href='https://masu-no-blog.com/' target='_blank' rel='noopener noreferrer external' style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <Button color='inherit'>
                            BLOG
                        </Button>
                    </a>
                    <AnchorLink href='#contact' style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <Button color='inherit'>
                            Contact
                        </Button>
                    </AnchorLink>
                </Toolbar>
            </AppBar>
            <div className={styles.toolbarMargin}/>
        </div>
    )
}

export default Navbar;