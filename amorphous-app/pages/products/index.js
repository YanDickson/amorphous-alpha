import axios from "axios"
import { route } from "../api/products/fetchAllProducts"
import { useEffect, useState } from "react"
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, SimpleGrid, Container } from '@mantine/core';
import Link from 'next/link'

export default function Products() {
    const [products, setProducts] = useState([{ name: 'test' }])

    const fetchProducts = async () => {
        const products = await axios.get(route)
        setProducts(products.data)
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

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
                            <Link href={`/products/${product.id}`}>
                                <div style={{ width: 340, margin: 'auto', cursor: 'pointer' }}>
                                    <Card shadow="sm" padding="lg" style={{ height: 340 }}>
                                        <Card.Section>
                                            <Image src={product.image} height={160} alt={`Image of ${product.name}`} />
                                        </Card.Section>

                                        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                            <Text weight={500}>{product.name}</Text>
                                            <Badge color="green" variant="light">
                                                {formatter.format(product.price)}
                                            </Badge>
                                        </Group>

                                        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                                            {product.description}
                                        </Text>
                                    </Card>
                                </div>
                            </Link>
                        )
                    }) : <></>}
                </SimpleGrid>
            </Container>
        </div>
    )
}