# Icons Guide for Client Pages

## Available Icons

When creating a client page, you can use any of the following icons for your links. Simply specify the icon name in the `icon` field of each link.

### Social Media
- `instagram` - Instagram icon
- `facebook` - Facebook icon
- `twitter` - Twitter/X icon
- `linkedin` - LinkedIn icon
- `youtube` - YouTube icon
- `tiktok` - TikTok icon

### Business
- `menu` - Menu/Food icon
- `shop` - Shopping bag icon
- `cart` - Shopping cart icon
- `store` - Store/Shop front icon
- `calendar` - Calendar/Booking icon
- `phone` - Phone/Contact icon
- `email` - Email icon
- `map` - Location/Map icon
- `clock` - Hours/Time icon
- `info` - Information icon
- `link` - Generic link icon
- `website` - Website/Globe icon

### Example Usage

```json
{
  "links": [
    {
      "title": "Our Menu",
      "url": "https://example.com/menu",
      "icon": "menu"
    },
    {
      "title": "Book a Table",
      "url": "https://example.com/book",
      "icon": "calendar"
    },
    {
      "title": "Follow us on Instagram",
      "url": "https://instagram.com/example",
      "icon": "instagram"
    },
    {
      "title": "Find Us",
      "url": "https://maps.google.com",
      "icon": "map"
    }
  ]
}
```

## Best Practices

1. Choose icons that clearly represent the link's purpose
2. Be consistent with icon usage across similar types of links
3. Use the most specific icon available for your use case
4. When in doubt, use the `link` icon as a fallback

## Icon Styling

Icons are automatically:
- Sized appropriately for the links
- Colored to match your theme
- Aligned properly with text
- Responsive on all devices 