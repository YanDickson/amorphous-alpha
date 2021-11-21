import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { route } from "../api/products/fetchProductDetails"
import { Grid, Col, Image, Text, Group, NumberInput, Button, Title, Accordion } from '@mantine/core';

export default function ProductDetails() {
    const router = useRouter()
    const { id } = router.query

    const [product, setProduct] = useState()

    const fetchProduct = async () => {
        const { id } = router.query
        const product = await axios.get(`${route}?id=${id}`)
        console.log(product.name, router.query)
        setProduct(product.data)
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    useEffect(() => { fetchProduct() }, [product, id])

    return (
        <div>
            <Grid>

                <Col span={5}>
                    <Image src={product?.image} alt={`Image of ${product?.name}`} />
                </Col>

                <Col span={7}>
                    <Grid>
                        <Col span={12}>
                            <Title weight={500}> {product?.name} </Title>
                        </Col>

                        <Col span={12}>
                            <Group>
                                <Text weight={500}> {formatter.format(product?.price)} </Text>
                                <Text size="sm"> per {product?.unit} </Text>
                            </Group>
                        </Col>

                        <Col span={12}>
                            <Group>
                                <NumberInput
                                    defaultValue={1}
                                    placeholder="Item quantity"
                                    description="Enter the quanity you would like to order"
                                    label="Quantity"
                                    min={1}
                                />
                            </Group>
                        </Col>

                        <Col span={12}>
                            <Button>
                                Add To Cart
                            </Button>
                        </Col>

                        <Col span={12}>
                            <Accordion iconPosition="right">
                                <Accordion.Item label="Item Description">
                                    {product?.description}
                                </Accordion.Item>
                            </Accordion>
                        </Col>

                        <Col span={12}>
                            <Accordion iconPosition="right">
                                <Accordion.Item label="Seller Details">
                                    <Grid>
                                        <Col span={12}>
                                            <Grid>
                                                <Col span={3}>Seller Name</Col>
                                                <Col span={9}>{product?.business.name}</Col>
                                            </Grid>
                                        </Col>
                                        <Col span={12}>
                                            <Grid>
                                                <Col span={3}>Seller Location</Col>
                                                <Col span={9}>{product?.business.address}</Col>
                                            </Grid>
                                        </Col>
                                        <Col span={12}>
                                            <Grid>
                                                <Col span={3}>Opening Hours</Col>
                                                <Col span={9}>{product?.business.openingHours} - {product?.business.closingHours}</Col>
                                            </Grid>
                                        </Col>
                                        <Col span={12}>
                                            <Grid>
                                                <Col span={3}>Seller Description</Col>
                                                <Col span={9}>{product?.business.description}</Col>
                                            </Grid>
                                        </Col>
                                    </Grid>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Grid>
                </Col>

            </Grid>
        </div>
    )
}