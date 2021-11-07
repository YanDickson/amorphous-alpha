import axios from "axios"
import { route } from "../api/products/fetchAllProducts"
import { useEffect, useState } from "react"
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, SimpleGrid, Container } from '@mantine/core';

export default function Products() {
    const [products, setProducts] = useState([{ name: 'test' }])

    const fetchProducts = async () => {
        const products = await axios.get(route)
        setProducts(products.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <div>
            <Container fluid={true}>
                <SimpleGrid
                    cols={4}
                    spacing="lg"
                    breakpoints={[
                        { maxWidth: 980, cols: 3, spacing: 'lg' },
                        { maxWidth: 755, cols: 1, spacing: 'md' },
                        { maxWidth: 600, cols: 1, spacing: 'sm' },
                    ]}
                >
                    {products ? products.map((product) => {
                        return (
                            <div style={{ width: 340, margin: 'auto' }}>
                                <Card shadow="sm" padding="lg">
                                    <Card.Section>
                                        <Image src={product.image} height={160} alt="Norway" />
                                    </Card.Section>

                                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                        <Text weight={500}>{product.name}</Text>
                                        <Badge color="pink" variant="light">
                                            On Sale
                                        </Badge>
                                    </Group>

                                    <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                        activities on and around the fjords of Norway
                                    </Text>

                                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                        Book classic tour now
                                    </Button>
                                </Card>
                            </div>
                        )
                    }) : <></>}
                </SimpleGrid>
            </Container>
        </div>
    )
}