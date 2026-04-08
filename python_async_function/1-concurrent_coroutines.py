#!/usr/bin/env python3
"""Function that takes in two integer arguments
(in this order, n and max_delay)
"""
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list:
    """Wait for n random delays between 0 and max_delay seconds and
    return them.
    Args:
        n (int): The number of random delays to wait for.
        max_delay (int): The maximum delay in seconds.
    Returns:
        list: A list of the actual delays in seconds.
    """
    delays = []
    for _ in range(n):
        delay = await wait_random(max_delay)
        delays.append(delay)
    return sorted(delays)
